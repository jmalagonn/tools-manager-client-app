import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { Customer } from 'src/app/Core/models/Customer.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-edit-customer-modal',
  templateUrl: './edit-customer-modal.component.html',
  styleUrls: ['./edit-customer-modal.component.scss']
})
export class EditCustomerModalComponent implements OnInit {
  customer?: Customer;
  editForm?: FormGroup;

  @Input() customerId?: number;
  
  constructor (
    public activeModal: NgbActiveModal,
    private httpService: HttpService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCustomer();
  }

  initForm() {
    this.editForm = this.fb.group({
      customerId: [this.customer!.customerId, Validators.required],
      customerName: [this.customer!.customerName, Validators.required]
    });
  }

  getCustomer() {
    this.httpService.get<Customer>(`${ApiConstants.customersApi}/${this.customerId}`)
      .subscribe(customer => { 
        this.customer = customer;
        this.initForm();
      });
  }

  onSubmit() {
    if(!this.editForm || !this.editForm!.valid) return;

    const body: Partial<Customer> = {
      customerId: this.editForm.controls["customerId"].value,
      customerName: this.editForm.controls["customerName"].value
    };

    this.httpService.put<Customer>(`${ApiConstants.customersApi}/${this.customerId}`, body)
      .subscribe(response => this.activeModal.close(response));
  }
}
