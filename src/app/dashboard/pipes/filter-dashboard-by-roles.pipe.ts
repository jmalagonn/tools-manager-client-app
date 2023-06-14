import { Pipe, PipeTransform } from '@angular/core';
import { UserRole } from 'src/app/Core/models/User-role.model';

@Pipe({
  name: 'filterDashboardRoles'
})
export class FilterDashboardByRolesPipe implements PipeTransform {
  transform(menuItems: any[], userRoles: UserRole[]): any[] {
    return menuItems.filter(x => 
      x.userRoles == null || 
      x.userRoles.some((y: number) => 
        userRoles.some(z => z.userRoleId == y)));
  }
}
