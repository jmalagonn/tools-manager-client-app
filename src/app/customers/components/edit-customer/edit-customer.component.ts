import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/Core/models/Customer.model';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  editForm?: FormGroup;

  @Input() customer?: Customer;

  @Output() cancelEditingEvent = new EventEmitter<void>();
  @Output() updateEvent = new EventEmitter<Customer>();
  
  constructor (private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();    
  }

  initForm(): void {
    if (!this.customer) return;
    
    this.editForm = this.fb.group({
      customerName: [this.customer!.name, Validators.required]
    });
  }

  onSubmit() {
    if(!this.editForm || !this.editForm!.valid) return;

    const body: Customer = {
      ...this.customer!,
      name: this.editForm.controls["customerName"].value
    };

    this.updateEvent.emit(body);
  }
}
