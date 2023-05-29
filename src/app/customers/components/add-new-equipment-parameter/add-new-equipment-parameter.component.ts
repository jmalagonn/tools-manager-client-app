import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { DropdownItem } from 'src/app/Core/models/Dropdown-item.model';
import { EquipmentParameter } from 'src/app/Core/models/Equipment-parameter.model';
import { MeasurementUnit } from 'src/app/Core/models/MeasurementUnit.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-new-equipment-parameter',
  templateUrl: './add-new-equipment-parameter.component.html',
  styleUrls: ['./add-new-equipment-parameter.component.scss']
})
export class AddNewEquipmentParameterComponent implements OnInit {
  measurementUnits?: MeasurementUnit[];
  faCheck = faCheck;
  faX = faX;
  equipmentParameterForm?: FormGroup;

  @Output() cancelAddNewParameterEvent = new EventEmitter<void>();
  @Output() addNewEquipmentParameterEvent = new EventEmitter<EquipmentParameter>();

  constructor(
    private httpService: HttpService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getMeasurementUnits();
    this.initForm();
  }

  initForm(): void {
    this.equipmentParameterForm = this.fb.group({
      equipmentParameterName: ['', Validators.required],
      measurementUnit: [null, Validators.required],
      parameterValue: [null, Validators.required]
    });
  }

  getMeasurementUnits(): void {
    this.httpService.get<MeasurementUnit[]>(ApiConstants.measurementUnitsApi)
      .subscribe(response => this.measurementUnits = response);
  }

  addNewEquipmenParameter(): void {
    if(this.equipmentParameterForm!.invalid) return;

    this.addNewEquipmentParameterEvent.emit({
      equipmentParameterEquipmentId: 0,
      equipmentParameterId: 0,
      name: this.equipmentParameterForm!.controls["equipmentParameterName"].value,
      measurementUnitId: this.equipmentParameterForm!.controls["measurementUnit"].value.measurementUnitId,
      measurementUnitSymbol: this.equipmentParameterForm!.controls["measurementUnit"].value.symbol,
      parameterValue: this.equipmentParameterForm!.controls["parameterValue"].value
    });
  }

  setMeasurementUnitValue(e: DropdownItem): void {
    this.equipmentParameterForm!.patchValue({
      measurementUnit: this.measurementUnits!.find(x => x.measurementUnitId == e.id)
    });
  }
}
