import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RouteConstants } from 'src/app/Core/constants/app-constants';
import { WorkOrder } from 'src/app/Core/models/workOrder/Work-order.model';
import { HttpService } from 'src/app/services/http.service';
import { UserRoles } from 'src/app/Core/enums/User-roles.enum';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { WorkState } from 'src/app/Core/models/Work-state.model';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.scss']
})
export class WorkOrderComponent implements OnInit {
  workOrder?: WorkOrder;
  routeConstants = RouteConstants;
  modalRef?: NgbModalRef;
  userRoles = UserRoles;
  isEditingWorkOrder: boolean = false;

  constructor (
    private httpService: HttpService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getWorkOrder();
  }

  getWorkOrder() {
    const workOrderId = this.route.snapshot.paramMap.get('id');

    this.httpService.get<WorkOrder>(`${ApiConstants.workOrderApi}/${workOrderId}`)
      .subscribe(response => this.workOrder = response);
  }

  setWorkOrderStateClass(workState: WorkState): string {
    switch (workState.id) 
    {
      case 2:
        return "in-progress";
      case 3:
        return "closed";
      default:
        return "open";
    }
  }

  onEditWorkOrder() {
    this.isEditingWorkOrder = true;
  }

  onWorkOrderEdited() {
    this.isEditingWorkOrder = false;
    this.getWorkOrder();
  }

  onCancelEditWorkOrder() {
    this.isEditingWorkOrder = false;
  }

  woActivityCreated() {
    this.getWorkOrder();
  }
}
