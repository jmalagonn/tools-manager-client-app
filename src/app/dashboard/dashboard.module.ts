import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardOptionsComponent } from './components/dashboard-options/dashboard-options.component';
import { FilterDashboardByRolesPipe } from './pipes/filter-dashboard-by-roles.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardOptionsComponent,
    FilterDashboardByRolesPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
