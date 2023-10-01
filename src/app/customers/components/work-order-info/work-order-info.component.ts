import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouteConstants } from 'src/app/Core/constants/app-constants';
import { WorkOrder } from 'src/app/Core/models/workOrder/Work-order.model';
import { NewWorkOrderActivityComponent } from '../new-work-order-activity/new-work-order-activity.component';

@Component({
  selector: 'app-work-order-info',
  templateUrl: './work-order-info.component.html',
  styleUrls: ['./work-order-info.component.scss']
})
export class WorkOrderInfoComponent {
  routeConstants = RouteConstants;

  constructor(private modalService: NgbModal) {}
  
  @Input() workOrder?: WorkOrder;

  @Output() workOrderActivityCreatedEvent = new EventEmitter<void>();

  openNewWorkOrderActivityModal() {
    if (!this.workOrder) return;
    
    const modalRef = this.modalService.open(NewWorkOrderActivityComponent, { size: 'xl' });
    modalRef.componentInstance.workOrderId = this.workOrder.workOrderId;
    modalRef.closed.subscribe(response => {
      response && this.workOrderActivityCreatedEvent.emit();
    });
  }
}
