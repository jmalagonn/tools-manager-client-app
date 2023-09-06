import { Component, OnInit } from '@angular/core';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { WorkOrder } from 'src/app/Core/models/workOrder/Work-order.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-work-orders',
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.scss']
})
export class WorkOrdersComponent implements OnInit {
    workOrders?: WorkOrder[];
    
    constructor(private httpService: HttpService) {}

    ngOnInit(): void {
        this.getWorkOrders();
    }

    getWorkOrders() {
        this.httpService.get<WorkOrder[]>(`${ApiConstants.workOrderApi}`)
            .subscribe(response => this.workOrders = response);
    }
}
