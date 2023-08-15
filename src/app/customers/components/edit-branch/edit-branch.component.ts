import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Branch } from 'src/app/Core/models/Branch.model';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.scss']
})
export class EditBranchComponent implements OnInit {
  editBranchForm?: FormGroup;

  @Input() branch?: Branch;

  @Output() cancelEditingBranchEvent = new EventEmitter<void>();
  @Output() updateBranchEvent = new EventEmitter<Branch>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editBranchForm = this.fb.group({
      branchName: [this.branch!.name, Validators.required],
      branchCode: [this.branch!.code],
    })
  }
  
  onSubmit() {
    if (!this.branch) return;
    
    const updatedBranch: Branch = {
      ...this.branch,
      name: this.editBranchForm?.controls["branchName"].value,
      code: this.editBranchForm?.controls["branchCode"].value,
    }

    this.updateBranchEvent.emit(updatedBranch);
  }
}
