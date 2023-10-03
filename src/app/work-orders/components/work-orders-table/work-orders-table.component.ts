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
  columns = Columns;
  filteredCodes: string = "";
  filteredCustomer: string = "";
  filteredBranch: string = "";
  filteredUser: string = "";
  sortedBy?: number;
  sortingType?: SortingType;

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
    this.filteredWorkOrders = this.workOrders!;
    this.sortBy(Columns.code);
  }

  filterWorkOrders() {
    if (!this.workOrders) return;

    this.filteredWorkOrders = this.workOrders.filter(x => {
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
    });
  }

  sortBy(column: number) {
    if (!this.sortingType || this.sortedBy != column) 
      this.sortingType = SortingType.ascending;

    if (this.sortedBy == column) {
      this.sortingType = this.sortingType == SortingType.ascending 
        ? SortingType.descending
        : SortingType.ascending;
    }      

    console.log(column, this.sortingType);

    this.sortedBy = column;

    switch (column) {
      case Columns.code:
        if (this.sortingType == SortingType.ascending) {
          this.filteredWorkOrders!.sort((a, b) => {
            if (a.internalCode && b.internalCode) {
              return a.internalCode - b.internalCode;
            } else if (a.internalCode && !b.internalCode) {
              return -1;
            } else if (!a.internalCode && b.internalCode) {
              return 1;
            } else {
              return a.workOrderId! - b.workOrderId!;
            }
          });
        } else {
          this.filteredWorkOrders!.sort((a, b) => {
            if (a.internalCode && b.internalCode) {
              return b.internalCode - a.internalCode;
            } else if (a.internalCode && !b.internalCode) {
              return 1;
            } else if (!a.internalCode && b.internalCode) {
              return -1;
            } else {
              return b.workOrderId! - a.workOrderId!;
            }
          });
        }        
        break;
      case Columns.state:
        if (this.sortingType == SortingType.ascending) {
          this.filteredWorkOrders!.sort((a, b) => a.workState!.id - b.workState!.id);
        } else {
          this.filteredWorkOrders!.sort((a, b) => b.workState!.id - a.workState!.id);
        }
        break;
      case Columns.customer:
        if (this.sortingType == SortingType.ascending) {
          this.filteredWorkOrders!.sort((a, b) => a.customerName!.localeCompare(b.customerName!));
        } else {
          this.filteredWorkOrders!.sort((a, b) => b.customerName!.localeCompare(a.customerName!));
        }
        break;
      case Columns.branch:
        if (this.sortingType == SortingType.ascending) {
          this.filteredWorkOrders!.sort((a, b) => a.branchName!.localeCompare(b.branchName!));
        } else {
          this.filteredWorkOrders!.sort((a, b) => b.branchName!.localeCompare(a.branchName!));
        }
        break;
      case Columns.user:
        if (this.sortingType == SortingType.ascending) {
          this.filteredWorkOrders!.sort((a, b) => a.assignedUserName!.localeCompare(b.assignedUserName!));
        } else {
          this.filteredWorkOrders!.sort((a, b) => b.assignedUserName!.localeCompare(a.assignedUserName!));
        }
        break;
    }
  }
}

enum Columns {
  code = 0,
  state,
  customer,
  branch,
  user
}

enum SortingType {
  ascending = 0,
  descending
}
