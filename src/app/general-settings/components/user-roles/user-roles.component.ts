import { Component, OnInit } from '@angular/core';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { UserRole } from 'src/app/Core/models/User-role.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {
  userRoles?: UserRole[];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getUserRoles();
  }

  getUserRoles(): void {
    this.httpService.get<UserRole[]>(ApiConstants.userRolesApi)
      .subscribe(response => this.userRoles = response);
  }
}
