import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../Core/core.module';
import { WorkOrdersRoutingModule } from './work-orders-routing.module';
import { WorkOrdersTableComponent } from './components/work-orders-table/work-orders-table.component';
import { WorkOrdersComponent } from './containers/work-orders/work-orders.component';
import { SortWorkOrdersPipe } from './pipes/sort-work-orders.pipe';
import { AddWorkOrderComponent } from './components/add-work-order/add-work-order.component';


@NgModule({
  declarations: [
    WorkOrdersComponent,
    WorkOrdersTableComponent,
    SortWorkOrdersPipe,
    AddWorkOrderComponent,
  ],
  imports: [
    CommonModule,
    WorkOrdersRoutingModule,
    SharedModule,
    CoreModule,
  ]
})
export class WorkOrderstModule { }
