import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-work-item-activity-log',
  templateUrl: './new-work-item-activity-log.component.html',
  styleUrls: ['./new-work-item-activity-log.component.scss']
})
export class NewWorkItemActivityLogComponent {
  faSave = faSave;
  faTrash = faTrash;
  addingItem = false;
  itemForm?: FormGroup;

  @Input() workItemId?: number;

  constructor(private fb: FormBuilder) {}

  onSaveWorkItem() {}

  initForm() {
    this.itemForm = this.fb.group({
      description: ['', Validators.required],
      workItemId: [this.workItemId, Validators.required]
    })
  }

  setAddingItem(state: boolean) {
    state && this.initForm();    
    this.addingItem = state;
  }

  onSubmit() {}
}
