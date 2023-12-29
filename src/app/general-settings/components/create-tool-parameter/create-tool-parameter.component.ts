import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { DropdownItem } from 'src/app/Core/models/Dropdown-item.model';
import { MeasurementUnit } from 'src/app/Core/models/MeasurementUnit.model';
import { Parameter } from 'src/app/Core/models/Parameter.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-create-tool-parameter',
  templateUrl: './create-tool-parameter.component.html',
  styleUrls: ['./create-tool-parameter.component.scss']
})
export class CreateToolParameterComponent implements OnInit {
  parameterForm?: FormGroup;

  @Input() measurementUnits?: MeasurementUnit[];

  @Output() parameterCreatedEvent = new EventEmitter<void>();
  @Output() cancelCreationEvent = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.parameterForm = this.fb.group({
      name: ["", Validators.required],
      measurementUnitId: [null, Validators.required]
    });
  }

  onSelectMeasurementUnit(item: DropdownItem): void {
    if (!this.parameterForm) return;

    this.parameterForm.patchValue({
      measurementUnitId: item.id
    });
  }

  onSubmit() {
    if (!this.parameterForm || !this.parameterForm.valid) 
      return;

    const body = {
      name: this.parameterForm.controls["name"].value,
      measurementUnitId: this.parameterForm.controls["measurementUnitId"].value,
    };

    this.httpService.post<Parameter>(ApiConstants.toolParametersApi, body)
      .subscribe(response => {
        this.toastrService.success("Parámetro creado exitosamente.");
        this.parameterCreatedEvent.emit();
      })
  }
}
