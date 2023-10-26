import { Pipe, PipeTransform } from '@angular/core';
import { Branch } from 'src/app/Core/models/Branch.model';
import { WorkOrder } from 'src/app/Core/models/workOrder/Work-order.model';
import { WorkStatePipe } from './work-state.pipe';

@Pipe({
  name: 'toTableData'
})
export class ToTableDataPipe implements PipeTransform {
  workStatePipe = new WorkStatePipe();

  transform(value: any[], ...args: any[]): any[] {
    switch(args[0]) { 
      case "branch":
        return this.branchToTableData(value);
      case "workOrder":
        return this.workOrderToTableData(value);
      default:
        return [];
    };    
  }

  branchToTableData(branches: Branch[]) {
    return branches.map(x => ({
      id: x.id,
      Código: x.code,
      Nombre: x.name,
    }));
  }

  workOrderToTableData(workOrders: WorkOrder[]) {
    return workOrders.map(x => ({
      id: x.workOrderId,
      Código: x.internalCode,
      Estado: this.workStatePipe.transform(x.workState!),
      Cliente: x.customerName,
      Sucursal: x.branchName
    }));
  }
}