import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { ToolParameter } from 'src/app/Core/models/ToolParameter.model';

@Component({
  selector: 'app-set-parameter',
  templateUrl: './set-parameter.component.html',
  styleUrls: ['./set-parameter.component.scss']
})
export class SetParameterComponent implements OnInit {
  faCheck = faCheck;
  faX = faX;
  setParameterForm?: FormGroup;

  @Input() toolParameter?: ToolParameter = {
    id: 1,
    name: "Temperatura",
    measurementUnitId: 5,
    measurementUnitSymbol: "C",
    parameterId: 1,
    toolId: 1,
  };

  @Output() cancelEvent = new EventEmitter<void>();
  @Output() setParameterEvent = new EventEmitter<Partial<ToolParameter>>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.setParameterForm = this.fb.group({
      parameterValue: [null, Validators.required]
    })
  }

  setParameterValue(): void {
    if(!this.setParameterForm!.valid) return;

    this.setParameterEvent.emit({
      parameterId: 1,
      parameterValue: this.setParameterForm!.controls["parameterValue"].value
    })
  }
}
