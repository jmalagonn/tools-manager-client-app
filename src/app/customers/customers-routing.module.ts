import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchDetailComponent } from './containers/branch-detail/branch-detail.component';
import { CustomerDetailComponent } from './containers/customer-detail/customer-detail.component';
import { CustomersComponent } from './containers/customers/customers.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent
  },
  {
    path: ':id',
    component: CustomerDetailComponent
  },
  {
    path: ':customerId/:branchId',
    component: BranchDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
