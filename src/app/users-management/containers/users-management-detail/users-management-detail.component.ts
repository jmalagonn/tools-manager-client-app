import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { UserRole } from 'src/app/Core/models/User-role.model';
import { User } from 'src/app/Core/models/User.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-users-management-detail',
  templateUrl: './users-management-detail.component.html',
  styleUrls: ['./users-management-detail.component.scss']
})
export class UsersManagementDetailComponent implements OnInit {
  user?: User;
  userRoles?: UserRole[];
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.getUser();
    this.getUserRoles();
  };

  getUser(): void {    
    const toolId = this.route.snapshot.paramMap.get('id');

    this.httpService.get<User>(`${ApiConstants.userEmployeeApi}/${toolId}`)
      .subscribe(response => this.user = response);
  }

  getUserRoles(): void {
    this.httpService.get<UserRole[]>(`${ApiConstants.userRolesApi}`)
      .subscribe(response => this.userRoles = response);
  }

  setIsEditing(value: boolean) {
    this.isEditing = value;
  }

  userUpdated() {
    this.setIsEditing(false);
    this.getUser();
  }
}
