import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { DropdownItem } from 'src/app/Core/models/Dropdown-item.model';
import { MeasurementUnit } from 'src/app/Core/models/MeasurementUnit.model';
import { ToolParameter } from 'src/app/Core/models/Tool-parameter.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-new-parameter',
  templateUrl: './add-new-parameter.component.html',
  styleUrls: ['./add-new-parameter.component.scss']
})
export class AddNewParameterComponent implements OnInit{
  faCheck = faCheck;
  faX = faX;
  addParameterForm?: FormGroup;
  measurementUnits?: MeasurementUnit[];

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService) {}

  @Output() cancelEvent = new EventEmitter<void>();
  @Output() addNewParameterEvent = new EventEmitter<ToolParameter>();

  ngOnInit(): void {
    this.getMeasurementUnits();
    this.initForm();
  }

  initForm(): void {
    this.addParameterForm = this.fb.group({
      parameterName: [null, Validators.required],
      measurementUnitId: [null, Validators.required],
      measurementUnitSymbol: [null],
      parameterValue: [null, Validators.required]
    })
  }

  getMeasurementUnits(): void {
    this.httpService.get<MeasurementUnit[]>(ApiConstants.measurementUnitsApi)
      .subscribe(response => this.measurementUnits = response);
  }

  onSelectOption(measurementUnit: DropdownItem) {
    const mUnit = this.measurementUnits!.find(x => x.measurementUnitId == measurementUnit.id);

    this.addParameterForm!.patchValue({
      measurementUnitId: mUnit!.measurementUnitId,
      measurementUnitSymbol: mUnit!.symbol,
    });
  }

  addNewParameter(): void {
    if(!this.addParameterForm!.valid) return;

    this.addNewParameterEvent.emit({
      name: this.addParameterForm!.controls["parameterName"].value,
      measurementUnitId: this.addParameterForm!.controls["measurementUnitId"].value,
      measurementUnitSymbol: this.addParameterForm!.controls["measurementUnitSymbol"].value,
      parameterValue: this.addParameterForm!.controls["parameterValue"].value,
    });
  }
}
