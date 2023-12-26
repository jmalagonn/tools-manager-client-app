import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-measurement-unit',
  templateUrl: './add-measurement-unit.component.html',
  styleUrls: ['./add-measurement-unit.component.scss']
})
export class AddMeasurementUnitComponent {
  isAddingNewItem: boolean = false;
  addNewItemForm?: FormGroup;
  
  @Output() itemCreatedEvent = new EventEmitter<void>();
  
  constructor(private fb: FormBuilder) {}

  onClickAddNewItem() {
    this.initForm();
    this.setIsAddingNewItem(true);
  }

  initForm() {
    this.addNewItemForm = this.fb.group({
      displayName: [null, Validators.required],
      symbol: [null, Validators.required],
      magnitude: [null],
    });
  }

  onSubmit() {
    if (!this.addNewItemForm?.valid) return;

    this.itemCreatedEvent.emit();
  }

  setIsAddingNewItem(value: boolean) {
    this.isAddingNewItem = value;
  }
}
