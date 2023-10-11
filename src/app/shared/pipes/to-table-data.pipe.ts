import { Pipe, PipeTransform } from '@angular/core';
import { Branch } from 'src/app/Core/models/Branch.model';

@Pipe({
  name: 'toTableData'
})
export class ToTableDataPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): any[] {
    return this.branchToTableData(value);
  }

  branchToTableData(branches: Branch[]) {
    return branches.map(x => ({
      id: x.id,
      Código: x.code,
      Nombre: x.name,
    }))
  }
}