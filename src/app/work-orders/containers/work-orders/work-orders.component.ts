import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { WorkOrder } from 'src/app/Core/models/workOrder/Work-order.model';
import { HttpService } from 'src/app/services/http.service';
import { AddWorkOrderComponent } from '../../components/add-work-order/add-work-order.component';

@Component({
  selector: 'app-work-orders',
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.scss']
})
export class WorkOrdersComponent implements OnInit {
    workOrders?: WorkOrder[];

    constructor(
        private httpService: HttpService,
        private modalService: NgbModal) {}

    ngOnInit(): void {
        this.getWorkOrders();
    }

    getWorkOrders() {
        this.httpService.get<WorkOrder[]>(`${ApiConstants.workOrderApi}`)
            .subscribe(response => this.workOrders = response);
    }

    openAddWorkOrderModal() {
        const modalRef = this.modalService.open(AddWorkOrderComponent, { size: 'xl' });
    }    
}
