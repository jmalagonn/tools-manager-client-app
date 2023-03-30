import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RouteConstants } from 'src/app/Core/constants/app-constants';
import { ItemList } from 'src/app/Core/models/Item-list.model';
import { UserRole } from 'src/app/Core/models/User-role.model';
import { User } from 'src/app/Core/models/User.model';
import { HttpService } from 'src/app/services/http.service';
import { UsersService } from 'src/app/services/users.service';
import { AddUserModalComponent } from '../../components/add-user-modal/add-user-modal.component';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent {
  modalRef?: NgbModalRef;
  users?: User[];
  userRoles?: UserRole[];

  constructor(
    private modalService: NgbModal,
    private httpService: HttpService,
    private router: Router,
    private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsersList();
    this.getUserRoles();
  }

  onOpenAddUserModal() {
    this.modalRef = this.modalService.open(AddUserModalComponent, { size: 'lg' });
    this.modalRef.componentInstance.userRoles = this.userRoles;

    this.modalRef.closed.subscribe(response => response && this.getUsersList());
  }

  getUsersList(): void {
    this.httpService.get<User[]>('Users/employees').subscribe(response => this.users = response);
  }

  onUserClicked(itemList: ItemList) {
    this.router.navigateByUrl(`/${RouteConstants.usersManagement}/${itemList.id}`);
  }

  getUserRoles(): void {
    this.usersService.getUserRoles().subscribe(userRoles => this.userRoles = userRoles);
  }
}
