import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { AppFile } from 'src/app/Core/models/AppFile.model';
import { ToolParameter } from 'src/app/Core/models/Tool-parameter.model';
import { Tool } from 'src/app/Core/models/Tool.model';
import { UpdateTool } from 'src/app/Core/models/tool/Update-tool.model';
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
  deletedFileIds: number[] = [];
  addedFiles: File[] = [];

  @Input() tool?: Tool;

  @Output() updatedToolEvent = new EventEmitter<UpdateTool>();
  @Output() cancelUpdateToolEvent = new EventEmitter<void>();
  
  constructor (
    private fb: FormBuilder,
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    if (!this.tool) return;

    this.editToolForm = this.fb.group({
      toolId: [this.tool.toolId, Validators.required],
      toolName: [this.tool.toolName, Validators.required]
    })
  }

  onSubmit() {
    if (!this.tool) return;
    this.tool!.toolName = this.editToolForm?.controls["toolName"].value; 
    
    const upToDateTool: UpdateTool = {
      id: this.tool.toolId,
      name: this.tool.toolName,
      toolParameters: this.tool.toolParameters!,
      deletedFileIds: this.deletedFileIds,
      addedFiles: this.addedFiles
    }
    
    this.updatedToolEvent.emit(upToDateTool);
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

  onAddFile(e: File) {
    this.addedFiles.push(e);
  }

  onDeleteFile(e: AppFile) {
    if (!this.tool || !e.appFileId) return;

    this.deletedFileIds.push(e.appFileId);
  }
}
