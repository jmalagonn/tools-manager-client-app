import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './containers/customers/customers.component';
import { AddCustomerModalComponent } from './components/add-customer-modal/add-customer-modal.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerDetailComponent } from './containers/customer-detail/customer-detail.component';
import { AddBranchModalComponent } from './components/add-branch-modal/add-branch-modal.component';
import { BranchDetailComponent } from './containers/branch-detail/branch-detail.component';
import { AddEquipmentModalComponent } from './components/add-equipment-modal/add-equipment-modal.component';
import { WorkOrdersTableComponent } from './components/work-orders-table/work-orders-table.component';


@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomerModalComponent,
    CustomerDetailComponent,
    AddBranchModalComponent,
    BranchDetailComponent,
    AddEquipmentModalComponent,
    WorkOrdersTableComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
