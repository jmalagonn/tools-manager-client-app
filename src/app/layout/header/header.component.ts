import { Component } from '@angular/core';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { take } from 'rxjs';
import { AppConstants } from 'src/app/Core/constants/app-constants';
import { Account } from 'src/app/Core/models/Account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  appConstants = AppConstants;
  rightFromBracket = faRightFromBracket;
  user?: Account;
  
  constructor(private accountService: AccountService) {
    this.accountService.currentAccount$.pipe(take(1)).subscribe(user => this.user = user!);
  }

  onLogout() {
    this.accountService.logout();
  }
}
