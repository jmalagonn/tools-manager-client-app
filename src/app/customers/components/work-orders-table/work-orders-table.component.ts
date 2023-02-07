import { Component, Input } from '@angular/core';
import { WorkOrder } from 'src/app/Core/models/Work-order.model';

@Component({
  selector: 'app-work-orders-table',
  templateUrl: './work-orders-table.component.html',
  styleUrls: ['./work-orders-table.component.scss']
})
export class WorkOrdersTableComponent {
  @Input() items?: WorkOrder[];

  onRowClicked(item: WorkOrder) {};
}
