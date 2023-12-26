import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeasurementUnit } from 'src/app/Core/models/MeasurementUnit.model';

@Component({
  selector: 'app-create-tool-parameter',
  templateUrl: './create-tool-parameter.component.html',
  styleUrls: ['./create-tool-parameter.component.scss']
})
export class CreateToolParameterComponent implements OnInit {
  parameterForm?: FormGroup;

  @Input() measurementUnits?: MeasurementUnit[];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.parameterForm = this.fb.group({
      name: ["", Validators.required],
      measurementUnitId: [null, Validators.required]
    });
  }

  onSubmit() {}
}
