import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { ToolParameter } from 'src/app/Core/models/Tool-parameter.model';
import { Tool } from 'src/app/Core/models/Tool.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-edit-tool-form',
  templateUrl: './edit-tool-form.component.html',
  styleUrls: ['./edit-tool-form.component.scss']
})
export class EditToolFormComponent implements OnInit {
  editToolForm?: FormGroup;
  toolParameters?: ToolParameter[];
  isAddingToolParameter: boolean = false;
  faTrash = faTrash;

  @Input() tool?: Tool;

  @Output() updatedToolEvent = new EventEmitter<Tool>();
  @Output() cancelUpdateToolEvent = new EventEmitter<void>();
  
  constructor (
    private fb: FormBuilder,
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    if (!this.tool) return;

    console.log(this.tool);

    this.editToolForm = this.fb.group({
      toolId: [this.tool.toolId, Validators.required],
      toolName: [this.tool.toolName, Validators.required]
    })
  }

  onSubmit() {
    console.log(this.tool);

    // this.updatedToolEvent.emit(this.editToolForm?.value);
  }

  onCancel() {
    this.cancelUpdateToolEvent.emit();
  }

  onAddMoreParameters() {
    this.isAddingToolParameter = true;

    this.httpService.get<ToolParameter[]>(ApiConstants.toolParametersApi)
      .subscribe(response => this.toolParameters = response);
  }

  onAddedNewParameter(e: ToolParameter) {
    this.tool!.toolParameters!.push(e);
    this.isAddingToolParameter = false;
  }

  onCancelAddMoreParameters() {
    this.isAddingToolParameter = false;
  }

  onChangeParameterValue(e: any, param: ToolParameter) {
    if (!this.tool || !this.tool.toolParameters || !this.tool.toolParameters.length)
      return;

    const paramIndex = this.tool.toolParameters?.findIndex(x => x.id == param.id);
    this.tool.toolParameters[paramIndex].parameterValue = e.target.value;
  }

  onDeleteParameter(param: ToolParameter) {
    this.tool!.toolParameters = this.tool!.toolParameters!.filter(x => x.id != param.id);
  }
}
