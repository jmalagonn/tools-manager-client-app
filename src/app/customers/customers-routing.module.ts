import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchDetailComponent } from './containers/branch-detail/branch-detail.component';
import { CustomerDetailComponent } from './containers/customer-detail/customer-detail.component';
import { CustomersComponent } from './containers/customers/customers.component';
import { EquipmentComponent } from './containers/equipment/equipment.component';
import { WorkItemComponent } from './containers/work-item/work-item.component';
import { WorkOrderComponent } from './containers/work-order/work-order.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent
  },
  {
    path: 'customer',
    children: [
      {
        path: ':id',
        component: CustomerDetailComponent,
      },
      {
        path: ':customerId/branch/:branchId',
        component: BranchDetailComponent
      }
    ]
  },
  {
    path: 'work-order/:id',
    component: WorkOrderComponent,
  },
  {
    path: 'equipment/:id',
    component: EquipmentComponent,
  },
  {
    path: 'work-item/:id',
    component: WorkItemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
