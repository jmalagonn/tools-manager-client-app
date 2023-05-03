import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contains'
})
export class ContainsPipe implements PipeTransform {

  transform(value: any[], arg: any): unknown {
    return value.some(x => x == arg);
  }

}
