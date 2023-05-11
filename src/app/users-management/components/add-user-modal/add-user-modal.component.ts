import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { Account } from 'src/app/Core/models/Account.model';
import { UserRole } from 'src/app/Core/models/User-role.model';
import { User } from 'src/app/Core/models/User.model';
import { AccountService } from 'src/app/services/account.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss']
})
export class AddUserModalComponent {
  addUserForm?: FormGroup;
  user?: Account;

  @Input() userRoles?: UserRole[];

  @Output() UserAddedEvent = new EventEmitter<User>();

  constructor(
    public activeModal: NgbActiveModal,
    public fb: FormBuilder,
    private httpService: HttpService,
    private accoutService: AccountService,
  ) {
    this.accoutService.currentAccount$.pipe(take(1)).subscribe(user => this.user = user!);
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addUserForm = this.fb.group({
      name: ['', Validators.required],
      email: [null],
      idCard: ['', Validators.required],
      userRoles: [null, this.rolesLengthValidator]
    });
  }

  onSubmit() {
    const body = {
      companyId: this.user!.companyId,
      email: this.addUserForm!.controls["email"].value,
      idCard: parseInt(this.addUserForm!.controls["idCard"].value),
      name: this.addUserForm!.controls["name"].value,
      userRoles: this.addUserForm!.controls["userRoles"].value.map((x: number) => ({userRoleId: x})),
    };
    
    this.httpService.post<User>(ApiConstants.addUserApi, body).subscribe(User => {
      this.activeModal.close(true);
    });
  }

  setUserRoleValue(e: any) {
    const index = this.userRoles!.findIndex(x => x.userRoleId == e.target.value);
    this.userRoles![index].isActive = e.target.checked;

    this.filterUserRoleFormValues();
  }

  filterUserRoleFormValues(): void {
    this.addUserForm?.patchValue({
      userRoles: this.userRoles!.filter(x => x.isActive).map(x => x.userRoleId)
    });
  }

  rolesLengthValidator(control: FormControl) {
    if(!control.value || !control.value.length) {
      return { invalidCustomValue: true };
    }

    return null;
  }
}
