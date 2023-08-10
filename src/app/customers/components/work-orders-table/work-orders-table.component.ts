import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WorkOrder } from 'src/app/Core/models/workOrder/Work-order.model';

@Component({
  selector: 'app-work-orders-table',
  templateUrl: './work-orders-table.component.html',
  styleUrls: ['./work-orders-table.component.scss']
})
export class WorkOrdersTableComponent {
  @Input() items?: WorkOrder[];

  constructor (private router: Router) {}

  onRowClicked(item: WorkOrder) {
    this.router.navigateByUrl(`customers/work-order/${item.workOrderId}`);
  };
}
