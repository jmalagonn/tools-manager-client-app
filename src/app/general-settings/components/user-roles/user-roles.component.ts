import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { ClientMessagesConstants } from 'src/app/Core/constants/client-messages-constants';
import { UserRole } from 'src/app/Core/models/User-role.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {
  userRoles?: UserRole[];

  constructor(
    private httpService: HttpService,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getUserRoles();
  }

  getUserRoles(): void {
    this.httpService.get<UserRole[]>(ApiConstants.userRolesApi)
      .subscribe(response => this.userRoles = response);
  }

  onUserRoleEdited(userRole: UserRole) {
    if (!this.userRoles) return;

    const userRoleIndex = this.userRoles.findIndex(x => x.id == userRole.id);

    this.httpService.put<UserRole>(ApiConstants.userRolesApi, userRole)
      .subscribe(response => {
        this.userRoles![userRoleIndex] = response;
        this.toastr.success(ClientMessagesConstants.roleNameUpdated);
      })
  }
}
