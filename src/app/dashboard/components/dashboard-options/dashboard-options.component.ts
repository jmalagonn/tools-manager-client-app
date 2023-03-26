import { Component } from '@angular/core';
import { take } from 'rxjs';
import { AppConstants } from 'src/app/Core/constants/app-constants';
import { Account } from 'src/app/Core/models/Account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-dashboard-options',
  templateUrl: './dashboard-options.component.html',
  styleUrls: ['./dashboard-options.component.scss']
})
export class DashboardOptionsComponent {
  appConstants = AppConstants;
  account?: Account;

  constructor(private accountService: AccountService) {
    accountService.currentAccount$.pipe(take(1)).subscribe(account => {
      this.account = account!;
    });
  }
}
