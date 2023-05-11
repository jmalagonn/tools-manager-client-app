import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { take } from 'rxjs';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { Account } from 'src/app/Core/models/Account.model';
import { User } from 'src/app/Core/models/User.model';
import { AccountService } from 'src/app/services/account.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  faEdit = faEdit;
  account?: Account;
  user?: User;
  editingProfile = false;

  constructor(
    private accountService: AccountService,
    private httpService: HttpService) {
    this.accountService.currentAccount$.pipe(take(1))
      .subscribe(account => this.account = account!);
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.httpService.get<User>(`${ApiConstants.userApi}/${this.account!.userId}`)
      .subscribe(user => this.user = user);
  }

  setEditingProfile(value: boolean) {
    this.editingProfile = value;
  }

  onUpdateUser() {
    this.setEditingProfile(false);
    this.getUser();
  }
}
