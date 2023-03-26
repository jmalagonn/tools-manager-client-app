import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppConstants, RouteConstants } from 'src/app/Core/constants/app-constants';
import { ItemList } from 'src/app/Core/models/Item-list.model';
import { User } from 'src/app/Core/models/User.model';
import { HttpService } from 'src/app/services/http.service';
import { AddUserModalComponent } from '../../components/add-user-modal/add-user-modal.component';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent {
  modalRef?: BsModalRef;
  users?: User[];

  constructor(
    private modalService: BsModalService,
    private httpService: HttpService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  onOpenAddUserModal() {
    this.modalRef = this.modalService.show(AddUserModalComponent);

    if (this.modalRef?.onHide) {
      this.modalRef.onHide.subscribe((user: User) => {
        if(!user.name) return;

        this.getUsersList();
      });
    }
  }

  getUsersList(): void {
    this.httpService.get<User[]>('Users/employees').subscribe(response => this.users = response);
  }

  onUserClicked(itemList: ItemList) {
    this.router.navigateByUrl(`/${RouteConstants.usersManagement}/${itemList.id}`);
  }
}
