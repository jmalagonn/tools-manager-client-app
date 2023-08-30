import { Component, Input } from '@angular/core';
import { RouteConstants } from 'src/app/Core/constants/app-constants';
import { WorkOrder } from 'src/app/Core/models/workOrder/Work-order.model';

@Component({
  selector: 'app-work-order-info',
  templateUrl: './work-order-info.component.html',
  styleUrls: ['./work-order-info.component.scss']
})
export class WorkOrderInfoComponent {
  routeConstants = RouteConstants;
  
  @Input() workOrder?: WorkOrder;
}
