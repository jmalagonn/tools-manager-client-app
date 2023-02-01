import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './containers/customers/customers.component';
import { AddCustomerModalComponent } from './components/add-customer-modal/add-customer-modal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomerModalComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
