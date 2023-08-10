import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ApiConstants, AppConstants, RouteConstants } from 'src/app/Core/constants/app-constants';
import { WorkItem } from 'src/app/Core/models/Work-item.model';
import { WorkOrder } from 'src/app/Core/models/workOrder/Work-order.model';
import { HttpService } from 'src/app/services/http.service';
import { AddWorkItemModalComponent } from '../../components/add-work-item-modal/add-work-item-modal.component';
import { UserRoles } from 'src/app/Core/enums/User-roles.enum';

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

  constructor (
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getWorkOrder();
  }

  getWorkOrder() {
    const workOrderId = this.route.snapshot.paramMap.get('id');

    this.httpService.get<WorkOrder>(`${ApiConstants.workOrderApi}/${workOrderId}`)
      .subscribe(response => this.workOrder = response);
  }

  navigateToWI(item: WorkItem) {
    this.router.navigateByUrl(`${RouteConstants.workItemPath}/${item.workItemId}`); 
  }

  showNewWIModal() {
    this.modalRef = this.modalService.open(AddWorkItemModalComponent, { size: 'lg' });
    this.modalRef.componentInstance.workOrder = this.workOrder;
    this.modalRef.closed.subscribe(response => response && this.getWorkOrder());
  }
}
