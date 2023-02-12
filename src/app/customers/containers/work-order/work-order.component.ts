import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiConstants, RouteConstants } from 'src/app/Core/constants/app-constants';
import { WorkItem } from 'src/app/Core/models/Work-item.model';
import { WorkOrder } from 'src/app/Core/models/Work-order.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.scss']
})
export class WorkOrderComponent implements OnInit {
  workOrder?: WorkOrder;

  constructor (
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getWorkOrder();
  }

  getWorkOrder() {
    const workOrderId = this.route.snapshot.paramMap.get('id');

    this.httpService.get<WorkOrder>(`${ApiConstants.workOrderApi}/${workOrderId}`)
      .subscribe(response => this.workOrder = response);
  }

  navigateToWi(item: WorkItem) {
    this.router.navigateByUrl(`${RouteConstants.workItemPath}/${item.workItemId}`); 
  }
}
