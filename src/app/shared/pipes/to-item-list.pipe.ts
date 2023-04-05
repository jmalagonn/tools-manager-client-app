import { Pipe, PipeTransform } from '@angular/core';
import { Branch } from 'src/app/Core/models/Branch.model';
import { Customer } from 'src/app/Core/models/Customer.model';
import { EquipmentParameter } from 'src/app/Core/models/Equipment-parameter.model';
import { Equipment } from 'src/app/Core/models/Equipment.model';
import { ItemList } from 'src/app/Core/models/Item-list.model';
import { MeasurementUnit } from 'src/app/Core/models/MeasurementUnit.model';
import { User } from 'src/app/Core/models/User.model';
import { WorkItemActivityLog } from 'src/app/Core/models/Work-item-activity-log.model';

@Pipe({
  name: 'toItemList'
})
export class ToItemListPipe implements PipeTransform {

  transform(value: any, arg: string): ItemList[] {    
    if (!value) return new Array();

    switch (arg) {
      case "user":
        return value.map((x: User) => ({ id: x.userId, name:  x.name}));
      case "customer":
        return value.map((x: Customer) => ({ id: x.customerId, name:  x.customerName}));
      case "branch":
        return value.map((x: Branch) => ({ id: x.branchId, name:  x.branchName}));
      case "equipment":
        return value.map((x: Equipment) => ({ id: x.equipmentId, name:  x.equipmentName}));
      case "workItemActivityLog":
        return value.map((x: WorkItemActivityLog) => ({ id: x.workItemActivityLogId, name: x.description }));
      case "equipmentParameter":
        return value.map((x: EquipmentParameter) => ({ id: x.equipmentParameterId, name: `${x.name} | Magnitud: ${x.measurementUnitSymbol}` }));
      case "measurementUnits":
        return value.map((x: MeasurementUnit) => ({ id: x.measurementUnitId, name: `${x.displayName} (${x.symbol})` }));
      default:
        return new Array();
    }
  }

}
