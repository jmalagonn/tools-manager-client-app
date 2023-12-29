import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { faEdit, faSave, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { DropdownItem } from 'src/app/Core/models/Dropdown-item.model';
import { MeasurementUnit } from 'src/app/Core/models/MeasurementUnit.model';
import { Parameter } from 'src/app/Core/models/Parameter.model';
import { HttpService } from 'src/app/services/http.service';

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
  
  newData: { name: string, id: number, symbol: string, measurementUnitId: number } = {
    name: "",
    id: -1,
    symbol: "",
    measurementUnitId: -1
  };
  
  @Input() parameters?: Parameter[];
  @Input() measurementUnits?: MeasurementUnit[];

  @Output() parameterUpdatedEvent = new EventEmitter<void>();

  constructor(
    private httpService: HttpService,
    private toasrtServie: ToastrService
  ) {}
  
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
      id: parameter.id!,
      symbol: parameter.measurementUnitSymbol,
      measurementUnitId: parameter.measurementUnitId
    };
  }

  onClickTrashButton(parameter: EditableParameter) {}
  
  onClickSaveButton(parameter: EditableParameter) {
    if (!this.newData.name.length || 
        this.newData.measurementUnitId < 0 ||
        this.newData.id < 0) {
      return;
    }

    const body = {
      id: this.newData.id,
      name: this.newData.name,
      measurementUnitId: this.newData.measurementUnitId
    }

    this.httpService.put<boolean>(ApiConstants.toolParametersApi, body)
      .subscribe(() => {
        this.toasrtServie.success("Parámetro actualizado exitosamente.");
        this.parameterUpdatedEvent.emit();
      });
  }
  
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
