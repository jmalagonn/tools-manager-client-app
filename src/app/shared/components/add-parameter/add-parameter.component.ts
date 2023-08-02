import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ToolParameter } from 'src/app/Core/models/Tool-parameter.model';
import { Tool } from 'src/app/Core/models/Tool.model';

@Component({
  selector: 'app-add-parameter',
  templateUrl: './add-parameter.component.html',
  styleUrls: ['./add-parameter.component.scss']
})
export class AddParameterComponent implements OnChanges{
  parametersList?: ToolParameter[] = [];
  faPlus = faPlus;
  isCreatingNewParameter: boolean = false;
  isSettingParameter: boolean = false;
  parameterToSet?: ToolParameter;

  @Input() existingParameters?: ToolParameter[];
  @Input() parametersToFilter?: ToolParameter[];

  @Output() cancelAddParameterEvent = new EventEmitter<void>();
  @Output() newParameterAddedEvent = new EventEmitter<ToolParameter>();
   
  ngOnChanges(changes: SimpleChanges): void {
    this.setParametersList();
  }

  setParametersList(): void {
    if (!this.existingParameters) return;    
    
    if (!this.parametersToFilter || !this.parametersToFilter!.length) {
      this.parametersList = this.existingParameters;
    } else {
      this.parametersList = this.existingParameters.filter(x => !this.parametersToFilter!.some(y => y.id == x.id));
    }
  }

  onCreateNewParameter() {
    this.isCreatingNewParameter = true;
  }

  onCancelCreateNewParameter() {
    this.isCreatingNewParameter = false;
  }

  onCancelAddParameter() {
    this.cancelAddParameterEvent.emit();
  }

  onNewParameterCreated(e: ToolParameter) {
    this.newParameterAddedEvent.emit(e);
  }

  onSetParameter(e: ToolParameter) {
    this.isSettingParameter = true;
    this.parameterToSet = e;
  }

  onCancelSetParameter() {
    this.isSettingParameter = false;
  }

  parameterWasSet(e: ToolParameter) {
    this.newParameterAddedEvent.emit(e);
  }
}
