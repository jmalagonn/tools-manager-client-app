import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersManagementRoutingModule } from './users-management-routing.module';
import { UsersManagementComponent } from './containers/users-management/users-management.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AddUserModalComponent } from './components/add-user-modal/add-user-modal.component';
import { SharedModule } from '../shared/shared.module';
import { UsersManagementDetailComponent } from './containers/users-management-detail/users-management-detail.component';
import { UserDetailViewComponent } from './components/user-detail-view/user-detail-view.component';
import { UserDetailEditComponent } from './components/user-detail-edit/user-detail-edit.component';
import { CoreModule } from '../Core/core.module';


@NgModule({
  declarations: [
    UsersManagementComponent,
    UsersListComponent,
    AddUserModalComponent,
    UsersManagementDetailComponent,
    UserDetailViewComponent,
    UserDetailEditComponent
  ],
  imports: [
    CommonModule,
    UsersManagementRoutingModule,
    SharedModule,
    CoreModule,
  ]
})
export class UsersManagementModule { }
