import { Pipe, PipeTransform } from '@angular/core';
import { WorkState } from 'src/app/Core/models/Work-state.model';

@Pipe({
  name: 'workState'
})
export class WorkStatePipe implements PipeTransform {
  transform(value: WorkState): string {
    if (!value) return "";
    
    switch(value.id) {
      case 1:
        return "Abierta";
      case 2:
        return "En proceso";
      case 3:
        return "Cerrada";
      default:
        return "";  
    }
  }

}
