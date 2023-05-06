import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Branch } from 'src/app/Core/models/Branch.model';
import { Customer } from 'src/app/Core/models/Customer.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-branch-modal',
  templateUrl: './add-branch-modal.component.html',
  styleUrls: ['./add-branch-modal.component.scss']
})
export class AddBranchModalComponent implements OnInit {
  addBranchForm?: FormGroup;
  
  @Input() customer?: Customer;

  constructor(
    public activeModal: NgbActiveModal,    
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
      customerId: this.customer!.customerId
    }

    this.httpService.post<Branch>('Branches', body).subscribe(branch => {
      this.activeModal.close(true);
    });
  }
}
