import { Pipe, PipeTransform } from '@angular/core';
import { WorkOrder } from 'src/app/Core/models/workOrder/Work-order.model';

@Pipe({
  name: 'sortWorkOrders'
})
export class SortWorkOrdersPipe implements PipeTransform {

  transform(workOrders: WorkOrder[]): WorkOrder[] {
    return workOrders.sort((a, b) => {
      if (a.internalCode && b.internalCode) {
        return a.internalCode <= b.internalCode ? 1 : -1;
      }

      return a.workOrderId! <= b.workOrderId! ? 1 : -1;
    });
  }

}
