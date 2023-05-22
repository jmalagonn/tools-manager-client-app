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

  @Input() toolParameter?: ToolParameter;

  @Output() cancelEvent = new EventEmitter<void>();
  @Output() setParameterEvent = new EventEmitter<ToolParameter>();

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
      id: this.toolParameter!.id,
      measurementUnitId: this.toolParameter!.measurementUnitId,
      measurementUnitSymbol: this.toolParameter!.measurementUnitSymbol,
      name: this.toolParameter!.name,
      parameterValue: this.setParameterForm!.controls["parameterValue"].value
    })
  }
}
