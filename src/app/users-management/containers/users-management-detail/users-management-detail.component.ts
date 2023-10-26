import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { RouteConstants } from 'src/app/Core/constants/app-constants';
import { UserRoles } from 'src/app/Core/enums/User-roles.enum';
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
  routeConstants = RouteConstants;
  userRolesEnum = UserRoles;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private router: Router) {}

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

  onWorkOrderClicked(e: any) {
    this.router.navigateByUrl(`/${RouteConstants.workOrderPath}/${e.id}`);
  }
}
