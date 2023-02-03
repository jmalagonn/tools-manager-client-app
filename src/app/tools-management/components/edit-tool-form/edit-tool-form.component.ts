import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tool } from 'src/app/Core/models/Tool.model';

@Component({
  selector: 'app-edit-tool-form',
  templateUrl: './edit-tool-form.component.html',
  styleUrls: ['./edit-tool-form.component.scss']
})
export class EditToolFormComponent implements OnInit {
  editToolForm?: FormGroup;

  @Input() tool?: Tool;

  @Output() updatedToolEvent = new EventEmitter<Tool>();
  @Output() cancelUpdateToolEvent = new EventEmitter<void>();
  
  constructor (private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    if (!this.tool) return;

    this.editToolForm = this.fb.group({
      toolId: [this.tool.toolId, Validators.required],
      toolName: [this.tool.toolName, Validators.required]
    })
  }

  onSubmit() {
    this.updatedToolEvent.emit(this.editToolForm?.value);
  }

  onCancel() {
    this.cancelUpdateToolEvent.emit();
  }
}
