import { Component, Input, OnChanges } from '@angular/core';
import { faEdit, faSave, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { DropdownItem } from 'src/app/Core/models/Dropdown-item.model';
import { MeasurementUnit } from 'src/app/Core/models/MeasurementUnit.model';
import { Parameter } from 'src/app/Core/models/Parameter.model';

@Component({
  selector: 'app-tool-parameters-table',
  templateUrl: './tool-parameters-table.component.html',
  styleUrls: ['./tool-parameters-table.component.scss']
})
export class ToolParametersTableComponent implements OnChanges {
  editableParameters: EditableParameter[] = [];
  faEdit = faEdit;
  faTrash = faTrash;
  faSave = faSave;
  faX = faX;
  
  newData: { name: string, symbol: string, measurementUnitId: number } = {
    name: "",
    symbol: "",
    measurementUnitId: -1
  };
  
  @Input() parameters?: Parameter[];
  @Input() measurementUnits?: MeasurementUnit[];
  
  ngOnChanges(): void {
    this.setEditableParameters(this.parameters);
  }

  setEditableParameters(parameters?: Parameter[]): void {
    if (!parameters || !parameters.length) return;

    this.editableParameters = parameters.map(p => ({
      ...p,
      isEditing: false,
    }));
  }

  onClickEditButton(parameter: EditableParameter) {
    parameter.isEditing = true;

    this.newData = {
      name: parameter.name,
      symbol: parameter.measurementUnitSymbol,
      measurementUnitId: parameter.measurementUnitId
    };
  }

  onClickTrashButton(parameter: EditableParameter) {}
  
  onClickSaveButton(parameter: EditableParameter) {}
  
  onClickCancelButton(parameter: EditableParameter) {
    parameter.isEditing = false;
  }

  onSelectNewMeasurementUnit(item: DropdownItem): void {
    const selectedMeasurementUnit = this.measurementUnits!.find(m => m.measurementUnitId == item.id);

    if (!selectedMeasurementUnit) return;

    this.newData = {
      ...this.newData,
      measurementUnitId: selectedMeasurementUnit.measurementUnitId,
      symbol: selectedMeasurementUnit.symbol
    };
  }
}

interface EditableParameter extends Parameter {
  isEditing: boolean;
}
