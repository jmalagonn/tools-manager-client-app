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
      branchName: [this.branch!.branchName, Validators.required]
    })
  }
  
  onSubmit() {
    const updatedBranch: Branch = {
      ...this.branch,
      branchName: this.editBranchForm?.controls["branchName"].value
    }

    this.updateBranchEvent.emit(updatedBranch);
  }
}
