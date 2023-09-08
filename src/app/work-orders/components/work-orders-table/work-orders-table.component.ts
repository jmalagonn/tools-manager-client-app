import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { RouteConstants } from 'src/app/Core/constants/app-constants';
import { WorkOrder } from 'src/app/Core/models/workOrder/Work-order.model';

@Component({
  selector: 'work-orders-table',
  templateUrl: './work-orders-table.component.html',
  styleUrls: ['./work-orders-table.component.scss']
})
export class WorkOrdersTableComponent implements OnChanges {
  filteredWorkOrders?: WorkOrder[];
  columns = columns;
  filteredCodes: string = "";
  filteredCustomer: string = "";
  filteredBranch: string = "";
  filteredUser: string = "";

  @Input() workOrders?: WorkOrder[];

  constructor(private router: Router) {}

  ngOnChanges() {
    if (this.workOrders)
      this.initWorkOrders();
  }

  navigateToWorkOrder(workOrder: WorkOrder) {
    this.router.navigateByUrl(`/${RouteConstants.workOrderPath}/${workOrder.workOrderId}`);
  }

  onApplyFilter(text: string, column: number): void {
    if (!this.workOrders) return;

    switch(column) {
      case this.columns.code:
        this.filteredCodes = text.toLocaleLowerCase();
        break;
      case this.columns.customer:
        this.filteredCustomer = text.toLocaleLowerCase();
        break;
      case this.columns.branch:
        this.filteredBranch = text.toLocaleLowerCase();
        break;
      case this.columns.user:
        this.filteredUser = text.toLocaleLowerCase();
        break;      
    }

    this.filterWorkOrders();
  }

  initWorkOrders() {
    this.filteredWorkOrders = this.workOrders;
  }

  filterWorkOrders() {
    if (!this.workOrders) return;

    this.filteredWorkOrders = this.workOrders.filter(x => {
      debugger;
      let result: boolean = false;

      result = !this.filteredCodes.length ? true : x.internalCode 
        ? x.internalCode.toString().includes(this.filteredCodes)
        : x.workOrderId!.toString().includes(this.filteredCodes);
      if (!result) return result;  

      result = !this.filteredCustomer.length ? true : x.customerName!.toLocaleLowerCase().includes(this.filteredCustomer);
      if (!result) return result;

      result = !this.filteredBranch.length ? true : x.branchName!.toLocaleLowerCase().includes(this.filteredBranch);
      if (!result) return result;

      result = !this.filteredUser.length ? true : x.assignedUserName!.toLocaleLowerCase().includes(this.filteredUser);
      
      return result;
    })
  }
}

enum columns {
  code = 0,
  state,
  customer,
  branch,
  user
}
