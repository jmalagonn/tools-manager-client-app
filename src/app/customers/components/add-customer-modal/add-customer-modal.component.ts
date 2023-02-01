import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Customer } from 'src/app/Core/models/Customer.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-customer-modal',
  templateUrl: './add-customer-modal.component.html',
  styleUrls: ['./add-customer-modal.component.scss']
})
export class AddCustomerModalComponent implements OnInit {
  addCustomerForm?: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,    
    public fb: FormBuilder,    
    public httpService: HttpService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addCustomerForm = this.fb.group({
      customerName: ['', Validators.required]
    });
  }

  onSubmit() {
    const body = {
      customerName: this.addCustomerForm!.controls["customerName"].value
    }

    this.httpService.post<Customer>('Customers', body).subscribe(customer => {
      this.bsModalRef.hide();
      this.bsModalRef.onHide.emit(customer);
    });
  }
}
