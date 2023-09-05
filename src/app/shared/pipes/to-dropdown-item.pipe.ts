import { Pipe, PipeTransform } from '@angular/core';
import { Branch } from 'src/app/Core/models/Branch.model';
import { Customer } from 'src/app/Core/models/Customer.model';
import { DropdownItem } from 'src/app/Core/models/Dropdown-item.model';
import { Employee } from 'src/app/Core/models/Employee.model';
import { Equipment } from 'src/app/Core/models/Equipment.model';
import { MeasurementUnit } from 'src/app/Core/models/MeasurementUnit.model';
import { User } from 'src/app/Core/models/User.model';
import { WorkItemActivityLog } from 'src/app/Core/models/Work-item-activity-log.model';
import { WorkState } from 'src/app/Core/models/Work-state.model';
import { WorkStatePipe } from './work-state.pipe';

@Pipe({
  name: 'toDropdownItem'
})
export class ToDropdownItemPipe implements PipeTransform {
  transform(values: any[], args: string = ""): DropdownItem[] {
    if (!values) return new Array();

    switch (args) {
      case "user":
        return values.map((x: User) => ({ id: x.userId, description:  x.name}));
      case "customer":
        return values.map((x: Customer) => ({ id: x.id, description:  x.name}));
      case "branch":
        return values.map((x: Branch) => ({ id: x.id!, description:  x.name}));
      case "workItemActivityLog":
        return values.map((x: WorkItemActivityLog) => ({ id: x.workItemActivityLogId!, description: x.description }));
      case "measurementUnits":
        return values.map((x: MeasurementUnit) => ({ 
          id: x.measurementUnitId, 
          description: x.displayName == 'NA' ? 'NA' : `${x.displayName} (${x.symbol})`
        }));
      case "employee":
        return values.map((x: Employee) => ({ id: x.userId, description: x.name }));
      case "equipment":
        return values.map((x: Equipment) => ({id: x.id, description: x.name}));
      case "workState":
        const workStateNamesPipe = new WorkStatePipe();
        return values.map((x: WorkState) => ({id: x.id, description: workStateNamesPipe.transform(x) }));
      default:
        const { idPropName, descriptionPropName } = this.findProperties(values[0]);
        return values.map((x: any) => ({ id: x[idPropName], description: x[descriptionPropName] }));
    }
  }

  private findProperties(obj: any) {
    let idPropName: string = "";
    let descriptionPropName: string = "";

    for(let prop in obj){
      if (prop.match(/id/i)?.length)
        idPropName = prop;

      if (prop.match(/name/i)?.length || prop.includes('Description'))
        descriptionPropName = prop;
    };

    return { idPropName, descriptionPropName };
  }
}
