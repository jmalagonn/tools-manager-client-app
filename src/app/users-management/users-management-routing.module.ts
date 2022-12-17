import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersManagementDetailComponent } from './containers/users-management-detail/users-management-detail.component';
import { UsersManagementComponent } from './containers/users-management/users-management.component';

const routes: Routes = [
  {
    path: '',
    component: UsersManagementComponent
  },
  {
    path: ':id',
    component: UsersManagementDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersManagementRoutingModule { }
