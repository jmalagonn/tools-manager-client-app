import { Pipe, PipeTransform } from '@angular/core';
import { Branch } from 'src/app/Core/models/Branch.model';
import { Customer } from 'src/app/Core/models/Customer.model';
import { Equipment } from 'src/app/Core/models/Equipment.model';
import { ItemList } from 'src/app/Core/models/Item-list.model';
import { WorkItemActivityLog } from 'src/app/Core/models/Work-item-activity-log.model';

@Pipe({
  name: 'toItemList'
})
export class ToItemListPipe implements PipeTransform {

  transform(value: any, arg: string): ItemList[] {    
    if (!value) return new Array();

    switch (arg) {
      case "customer":
        return value.map((x: Customer) => ({ id: x.customerId, name:  x.customerName}));
      case "branch":
        return value.map((x: Branch) => ({ id: x.branchId, name:  x.branchName}));
      case "equipment":
        return value.map((x: Equipment) => ({ id: x.equipmentId, name:  x.equipmentName}));
      case "workItemActivityLog":
        return value.map((x: WorkItemActivityLog) => ({ id: x.workItemActivityLogId, name: x.description }));
    }

    return new Array();
  }

}
