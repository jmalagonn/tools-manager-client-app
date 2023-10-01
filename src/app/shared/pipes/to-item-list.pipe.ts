import { Pipe, PipeTransform } from '@angular/core';
import { Branch } from 'src/app/Core/models/Branch.model';
import { Customer } from 'src/app/Core/models/Customer.model';
import { Equipment } from 'src/app/Core/models/Equipment.model';
import { ItemList } from 'src/app/Core/models/Item-list.model';
import { MeasurementUnit } from 'src/app/Core/models/MeasurementUnit.model';
import { Tool } from 'src/app/Core/models/Tool.model';
import { ToolParameter } from 'src/app/Core/models/Tool-parameter.model';
import { User } from 'src/app/Core/models/User.model';
import { WorkOrderActivity } from 'src/app/Core/models/workOrder/Work-order-activity.model';
import { Parameter } from 'src/app/Core/models/Parameter.model';

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
        return value.map((x: Customer) => ({ id: x.id, name:  x.name}));
      case "branch":
        return value.map((x: Branch) => ({ id: x.id, name:  x.name}));
      case "equipment":
        return value.map((x: Equipment) => ({ id: x.id, name:  x.name}));
      case "workOrderActivity":
        return value.map((x: WorkOrderActivity) => ({ id: x.id, name: x.description }));
      case "equipmentParameter":
        return value.map((x: Parameter) => ({ id: x.id, name: `${x.name} | Magnitud: ${x.measurementUnitSymbol}` }));
      case "measurementUnits":
        return value.map((x: MeasurementUnit) => ({ id: x.measurementUnitId, name: `${x.displayName} (${x.symbol})` }));
      case "toolParameter":
        return value.map((x: ToolParameter) => ({ 
          id: x.id, 
          name: x.measurementUnitSymbol 
            ? `${x.name} | Magnitud: ${x.measurementUnitSymbol}`
            : `${x.name}`
        }));
      case "tool":
        return value.map((x: Tool) => ({ id: x.toolGuid.slice(-6), name: x.toolName }));
      default:
        return new Array();
    }
  }

}
