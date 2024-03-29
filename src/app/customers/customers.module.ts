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
import { AddWorkOrderModalComponent } from './components/add-work-order-modal/add-work-order-modal.component';
import { AddWorkOrderFormComponent } from './components/add-work-order-form/add-work-order-form.component';
import { WorkOrderComponent } from './containers/work-order/work-order.component';
import { EquipmentComponent } from './containers/equipment/equipment.component';
import { NewWorkOrderActivityComponent } from './components/new-work-order-activity/new-work-order-activity.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { AddEquipmentParameterComponent } from './components/add-equipment-parameter/add-equipment-parameter.component';
import { AddNewEquipmentParameterComponent } from './components/add-new-equipment-parameter/add-new-equipment-parameter.component';
import { EditEquipmentComponent } from './components/edit-equipment/edit-equipment.component';
import { EquipmentInfoComponent } from './components/equipment-info/equipment-info.component';
import { EditBranchComponent } from './components/edit-branch/edit-branch.component';
import { CoreModule } from '../Core/core.module';
import { BranchesListComponent } from './components/branches-list/branches-list.component';
import { EditWorkOrderComponent } from './components/edit-work-order/edit-work-order.component';
import { WorkOrderInfoComponent } from './components/work-order-info/work-order-info.component';

@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomerModalComponent,
    CustomerDetailComponent,
    AddBranchModalComponent,
    BranchDetailComponent,
    AddEquipmentModalComponent,
    AddWorkOrderModalComponent,
    AddWorkOrderFormComponent,
    WorkOrderComponent,
    EquipmentComponent,
    NewWorkOrderActivityComponent,
    EditCustomerComponent,
    AddEquipmentParameterComponent,
    AddNewEquipmentParameterComponent,
    EditEquipmentComponent,
    EquipmentInfoComponent,
    EditBranchComponent,
    BranchesListComponent,
    EditWorkOrderComponent,
    WorkOrderInfoComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    CoreModule,
  ]
})
export class CustomersModule { }
