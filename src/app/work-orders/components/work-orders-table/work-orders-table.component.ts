import { Component, Input } from '@angular/core';
import { WorkOrder } from 'src/app/Core/models/workOrder/Work-order.model';

@Component({
  selector: 'work-orders-table',
  templateUrl: './work-orders-table.component.html',
  styleUrls: ['./work-orders-table.component.scss']
})
export class WorkOrdersTableComponent {
    @Input() workOrders?: WorkOrder[];
}
