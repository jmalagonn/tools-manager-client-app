import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { ApiConstants, AppConstants, ErrorConstants } from 'src/app/Core/constants/app-constants';
import { EquipmentParameter } from 'src/app/Core/models/Equipment-parameter.model';
import { Equipment } from 'src/app/Core/models/Equipment.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.scss']
})
export class EditEquipmentComponent implements OnInit {
  faTrash = faTrash;
  equipmentForm?: FormGroup;
  addingNewEquipmentParameter = false;
  appConstants = AppConstants;
  tempEquipmentParameters: EquipmentParameter[] = [];

  @Input() equipment?: Equipment;

  @Output() cancelEvent = new EventEmitter<void>();
  @Output() equipmentUpdatedEvent = new EventEmitter<Equipment>();

  constructor(
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private httpService: HttpService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.tempEquipmentParameters = this.equipment!.equipmentParameters;
    this.equipmentForm = this.fb.group(
      {
        equipmentId: [this.equipment!.equipmentId, Validators.required],
        equipmentName: [this.equipment!.equipmentName, Validators.required],
        equipmentDescription: [this.equipment!.equipmentDescription],
        equipmentParameters: [this.tempEquipmentParameters]
      }
    );
  }

  equipmentParameterChanged(e: any, id: number) {
    const index = this.equipment!.equipmentParameters.findIndex(x => x.equipmentParameterId == id);

    if (index == -1) return;

    this.equipment!.equipmentParameters[index].parameterValue = parseFloat(e.target.value);
    this.patchEquipmentParametersToForm();
  }

  setAddingNewEquipmentParameter(value: boolean) {
    this.addingNewEquipmentParameter = value;
  }

  addNewParameter(parameter: EquipmentParameter) {
    if (parameter.equipmentParameterId != 0 &&
      this.tempEquipmentParameters.find(x => x.equipmentParameterId == parameter.equipmentParameterId)) {
      this.toastrService.error(ErrorConstants.parameterAlreadyExists);
      return;
    }

    this.tempEquipmentParameters.push(parameter);
    this.patchEquipmentParametersToForm();
    this.setAddingNewEquipmentParameter(false);
  }

  deleteParameter(parameterName: string) {
    const index = this.tempEquipmentParameters.findIndex(x => x.name == parameterName);
    this.tempEquipmentParameters.splice(index, 1);
    this.patchEquipmentParametersToForm();
  }

  patchEquipmentParametersToForm() {
    this.equipmentForm?.patchValue({
      equipmentParameters: this.tempEquipmentParameters
    });
    this.equipmentForm!.markAsDirty();
  }

  onSubmit() {
    if(!this.equipmentForm!.valid) 
      return;

    const body: Equipment = {
      equipmentId: this.equipment!.equipmentId,
      equipmentName: this.equipmentForm!.controls["equipmentName"].value,
      equipmentDescription: this.equipmentForm!.controls["equipmentDescription"].value,
      equipmentParameters: this.equipmentForm!.controls["equipmentParameters"].value
    };

    this.httpService.put<Equipment>(ApiConstants.equipmentApi, body)
      .subscribe(response => this.equipmentUpdatedEvent.emit(response));
  }
}
