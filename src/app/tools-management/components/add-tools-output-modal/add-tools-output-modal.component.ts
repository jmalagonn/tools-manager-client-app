import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownItem } from 'src/app/Core/models/Dropdown-item.model';
import { Tool } from 'src/app/Core/models/Tool.model';
import { ToolOutput } from 'src/app/Core/models/Tool-output.model';
import { User } from 'src/app/Core/models/User.model';
import { HttpService } from 'src/app/services/http.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiConstants } from 'src/app/Core/constants/app-constants';

@Component({
  selector: 'app-add-tools-output-modal',
  templateUrl: './add-tools-output-modal.component.html',
  styleUrls: ['./add-tools-output-modal.component.scss']
})
export class AddToolsOutputModalComponent implements OnInit {
  employees?: User[];
  availableTools: Tool[] = [];
  selectedTools:Tool[] = [];
  registerOutputForm?: FormGroup;
  responsible?: User;

  constructor(
    public activeModal: NgbActiveModal, 
    public httpService: HttpService,
    private fb: FormBuilder) { } 

  ngOnInit(): void {
    this.initForm();
    this.getEmployees();
    this.getTools();
  }

  getEmployees(): void {
    this.httpService.get<User[]>('Users/employees').subscribe(employees => this.employees = employees);
  }

  getTools(): void {
    this.httpService.get<Tool[]>('Tools/available-tools').subscribe(tools => this.availableTools = tools);
  } 

  onSelectTool(selectedTool: Tool): void {
    this.availableTools = this.availableTools?.filter(tool => tool.toolId != selectedTool.toolId);
    this.selectedTools?.push(selectedTool);    
    this.registerOutputForm!.controls["tools"].patchValue(this.selectedTools);  
  }

  onDeleteTool(toBeDeleted: Tool): void {
    this.selectedTools = this.selectedTools.filter(tool => tool.toolId != toBeDeleted.toolId);
    this.availableTools!.push(toBeDeleted);
    this.registerOutputForm!.controls["tools"].patchValue(this.selectedTools);
  }

  initForm() {
    this.registerOutputForm = this.fb.group({
      responsible: [null, Validators.required],
      tools: [null, Validators.required]
    });
  }

  registerOutput(): void {
    this.httpService.post<ToolOutput>(ApiConstants.toolOutputsApi, this.registerOutputForm?.value)
      .subscribe(() => this.activeModal.close(true));
  }

  onSelectResponsible(user: DropdownItem): void {
    this.responsible = this.employees!.find(e => e.userId == user.id);
    this.registerOutputForm!.controls["responsible"].setValue({...this.responsible});
  }
}
