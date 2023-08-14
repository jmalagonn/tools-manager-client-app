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
import { AddWorkOrderModalComponent } from './components/add-work-order-modal/add-work-order-modal.component';
import { AddWorkOrderFormComponent } from './components/add-work-order-form/add-work-order-form.component';
import { WorkItemsListComponent } from './components/work-items-list/work-items-list.component';
import { WorkOrderComponent } from './containers/work-order/work-order.component';
import { EquipmentComponent } from './containers/equipment/equipment.component';
import { WorkItemComponent } from './containers/work-item/work-item.component';
import { NewWorkItemActivityLogComponent } from './components/new-work-item-activity-log/new-work-item-activity-log.component';
import { WorkItemDetailModalComponent } from './components/work-item-detail-modal/work-item-detail-modal.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { AddEquipmentParameterComponent } from './components/add-equipment-parameter/add-equipment-parameter.component';
import { AddNewEquipmentParameterComponent } from './components/add-new-equipment-parameter/add-new-equipment-parameter.component';
import { AddWorkItemModalComponent } from './components/add-work-item-modal/add-work-item-modal.component';
import { EditEquipmentComponent } from './components/edit-equipment/edit-equipment.component';
import { EquipmentInfoComponent } from './components/equipment-info/equipment-info.component';
import { EditBranchComponent } from './components/edit-branch/edit-branch.component';
import { CoreModule } from '../Core/core.module';
import { WorkItemGeneralInfoComponent } from './components/work-item-general-info/work-item-general-info.component';
import { WorkItemEditComponent } from './components/work-item-edit/work-item-edit.component';
import { BranchesListComponent } from './components/branches-list/branches-list.component';

@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomerModalComponent,
    CustomerDetailComponent,
    AddBranchModalComponent,
    BranchDetailComponent,
    AddEquipmentModalComponent,
    WorkOrdersTableComponent,
    AddWorkOrderModalComponent,
    AddWorkOrderFormComponent,
    WorkItemsListComponent,
    WorkOrderComponent,
    EquipmentComponent,
    WorkItemComponent,
    NewWorkItemActivityLogComponent,
    WorkItemDetailModalComponent,
    EditCustomerComponent,
    AddEquipmentParameterComponent,
    AddNewEquipmentParameterComponent,
    AddWorkItemModalComponent,
    EditEquipmentComponent,
    EquipmentInfoComponent,
    EditBranchComponent,
    WorkItemGeneralInfoComponent,
    WorkItemEditComponent,
    BranchesListComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    CoreModule,
  ]
})
export class CustomersModule { }
