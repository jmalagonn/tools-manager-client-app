import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Branch } from 'src/app/Core/models/Branch.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-branch-modal',
  templateUrl: './add-branch-modal.component.html',
  styleUrls: ['./add-branch-modal.component.scss']
})
export class AddBranchModalComponent {
  addBranchForm?: FormGroup;
  customerId?: number;

  constructor(
    public bsModalRef: BsModalRef,    
    public fb: FormBuilder,    
    public httpService: HttpService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addBranchForm = this.fb.group({
      branchName: ['', Validators.required]
    });
  }

  onSubmit() {
    const body = {
      branchName: this.addBranchForm!.controls["branchName"].value,
      customerId: this.customerId
    }

    this.httpService.post<Branch>('Branches', body).subscribe(branch => {
      this.bsModalRef.hide();
      this.bsModalRef.onHide.emit(branch);
    });
  }
}
