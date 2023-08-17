import { Pipe, PipeTransform } from '@angular/core';
import { Account } from '../models/Account.model';
import { UserRoles } from '../enums/User-roles.enum';
import { AccountService } from 'src/app/services/account.service';
import { take } from 'rxjs';

@Pipe({
  name: 'userRoles'
})
export class UserRolesPipe implements PipeTransform {
  user?: Account;
  
  constructor(private accountService: AccountService) {
    this.accountService.currentAccount$.pipe(take(1)).subscribe(user => this.user = user!);
  }

  transform(requiredRole: UserRoles): boolean {
    if (!this.user) return false;

    if (this.user.userRoles
      .some(x => x.id == UserRoles.AppAdmin || x.id == UserRoles.CompanyAdmin))
      return true;
      
    return this.user.userRoles.some(x => x.id == requiredRole);
  }

}
