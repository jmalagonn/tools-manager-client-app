import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'src/app/Core/models/Customer.model';
import { ItemList } from 'src/app/Core/models/Item-list.model';

@Pipe({
  name: 'toItemList'
})
export class ToItemListPipe implements PipeTransform {

  transform(value: any, arg: string): ItemList[] {    
    if (!value) return new Array();

    switch (arg) {
      case "customer":
        return value.map((x: Customer) => ({ id: x.customerId, name:  x.customerName}));
    }

    return new Array();
  }

}
