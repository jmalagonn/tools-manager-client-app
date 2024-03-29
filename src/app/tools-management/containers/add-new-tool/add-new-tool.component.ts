import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteConstants } from 'src/app/Core/constants/app-constants';
import { ItemList } from 'src/app/Core/models/Item-list.model';
import { Tool } from 'src/app/Core/models/Tool.model';
import { ToolParameter } from 'src/app/Core/models/Tool-parameter.model';
import { HttpService } from 'src/app/services/http.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AddTool } from 'src/app/Core/models/Add-tool.model';
import { ApiConstants } from 'src/app/Core/constants/api-constants';

@Component({
  selector: 'app-add-new-tool',
  templateUrl: './add-new-tool.component.html',
  styleUrls: ['./add-new-tool.component.scss']
})
export class AddNewToolComponent implements OnInit {
  isAddingAdditionalInfo = false;
  isAddingExistingParameter = false;
  isAddingNewParameter = false;
  addNewToolForm?: FormGroup;
  tool?: Partial<AddTool>;
  toolParameters?: ToolParameter[];
  tempParameter?: ToolParameter;
  modalRef?: NgbModalRef;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private router: Router,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getToolParameters();
  }

  getToolParameters(): void {
    this.httpService.get<ToolParameter[]>(ApiConstants.toolParametersApi)
      .subscribe(response => this.toolParameters = response);
  }

  initForm(): void {
    this.addNewToolForm = this.fb.group({
      toolName: [null, Validators.required],
      files: [new Array()]
    })
  }

  onAddParameter(parameter: Partial<ToolParameter>) {    
    this.addToolParameter(parameter);
    this.setIsAddingAdditionalInfo(false);
  }

  addToolParameter(parameter: Partial<ToolParameter>) {
    const newParameter: ToolParameter = {
      id: parameter.id,
      name: parameter.name!,
      measurementUnitId: parameter.measurementUnitId!,
      measurementUnitSymbol: parameter.measurementUnitSymbol!,
      parameterValue: parameter.parameterValue!
    };

    if (!this.tool || !this.tool.toolParameters) {
      this.tool = {
        ...this.tool,
        toolParameters: [newParameter]
      };
    } else {
      this.tool.toolParameters.push(newParameter);
    };

    this.setIsAddingAdditionalInfo(false);
  }

  addNewTool() {
    if (!this.addNewToolForm!.valid) return;

    const files: File[] = this.addNewToolForm!.controls["files"].value!;
    const data = new FormData();

    data.append("name", this.addNewToolForm!.controls["toolName"].value);
    this.tool?.toolParameters && data.append("toolParameters", JSON.stringify(this.tool!.toolParameters));
    files.map(file => data.append("files", file));

    this.httpService.post<Tool>(ApiConstants.toolsApi, data)
      .subscribe(() => this.router.navigateByUrl(`/${RouteConstants.toolsPath}`));
  }

  initAdditionalInformation() {
    this.setIsAddingAdditionalInfo(true);
    this.setIsAddingExistingParameter(false);
    this.setIsAddingNewParameter(false);
  }
 
  setIsAddingAdditionalInfo(value: boolean): void {
    this.isAddingAdditionalInfo = value;
  }

  setIsAddingExistingParameter(value: boolean): void {
    this.isAddingExistingParameter = value;
  }

  setIsAddingNewParameter(value: boolean): void {
    this.isAddingNewParameter = value;
  }

  setExistingParameter(item: ItemList) {
    this.tempParameter = this.toolParameters!.find(x => x.id == item.id);
    this.setIsAddingExistingParameter(true);
  }

  onSelectFile(event: any) {
    const tempFiles: File[] = this.addNewToolForm!.controls["files"].value;
    tempFiles.push(...event.addedFiles);

    this.addNewToolForm!.patchValue({files: tempFiles});
  }

  onRemoveFile(file: File) {
    if (!this.addNewToolForm!.controls["files"].value)
      return;
      
    const tempFiles: File[] = this.addNewToolForm!.controls["files"].value;
    const resFiles: File[] = tempFiles.filter(x => x.name != file.name);

    this.addNewToolForm!.patchValue({files: resFiles});
  }
}
