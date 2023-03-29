import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { UserRole } from 'src/app/Core/models/User-role.model';
import { User } from 'src/app/Core/models/User.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user-detail-edit',
  templateUrl: './user-detail-edit.component.html',
  styleUrls: ['./user-detail-edit.component.scss']
})
export class UserDetailEditComponent implements OnChanges {
  editForm?: FormGroup;
  
  @Input() user?: User;
  @Input() userRoles?: UserRole[];
  
  @Output() cancelEditEvent = new EventEmitter<void>();
  @Output() userUpdatedEvent = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private httpService: HttpService) {}
  
  ngOnChanges(): void {
    this.initform();
    this.filterActiveUserRoles();
  }

  initform(): void {
    if(!this.user) return;

    this.editForm = this.fb.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email],
      idCard: [this.user.idCard, Validators.required],
      userRoles: [null]
    });
  }

  filterActiveUserRoles() {
    if(!this.userRoles || !this.user) return;

    this.userRoles = this.userRoles.map(x => {
      this.user!.userRoles.some(y => y.userRoleId == x.userRoleId)
        ? x.isActive = true
        : x.isActive = false;

      return x;
    });

    this.filterUserRoleFormValues();
  }

  setUserRoleValue(e: any): void {
    const index = this.userRoles!.findIndex(x => x.userRoleId == e.target.value);
    this.userRoles![index].isActive = e.target.checked;
    this.editForm!.markAsDirty();

    this.filterUserRoleFormValues();
  }

  filterUserRoleFormValues(): void {
    this.editForm?.patchValue({
      userRoles: this.userRoles!.filter(x => x.isActive).map(x => x.userRoleId)
    });
  }

  onSubmit() {
    const body: User = {
      company: this.user!.company,
      email: this.editForm!.controls["email"].value,
      idCard: this.editForm!.controls["idCard"].value,
      name: this.editForm!.controls["name"].value,
      userId: this.user!.userId,
      userRoles: this.editForm!.controls["userRoles"].value.map((x: number) => ({userRoleId: x})),
    };

    this.httpService.put<User>(ApiConstants.userApi, body)
      .subscribe(() => this.userUpdatedEvent.emit());
  }
}
