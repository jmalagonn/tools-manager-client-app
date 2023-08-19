import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { User } from 'src/app/Core/models/User.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-edit-user-info',
  templateUrl: './edit-user-info.component.html',
  styleUrls: ['./edit-user-info.component.scss']
})
export class EditUserInfoComponent implements OnInit {
  userForm?: FormGroup;

  @Input() user?: User;

  @Output() cancelEditEvent = new EventEmitter<void>();
  @Output() updatedUserEvent = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.initForm();
  }
  
  initForm(): void {
    this.userForm = this.fb.group({
      address:  [this.user!.address],
      email:    [this.user!.email, Validators.required],
      idCard:   [this.user!.idCard, Validators.required],
      name:     [this.user!.name, Validators.required],
      phone:    [this.user!.phone],
    })
  }

  onSubmit() {
    if (!this.userForm!.valid) return;

    const body: Partial<User> = {
      address: this.userForm!.controls["address"].value,
      company: this.user!.company,
      email: this.userForm!.controls["email"].value,
      idCard: this.userForm!.controls["idCard"].value,
      name: this.userForm!.controls["name"].value,
      phone: this.userForm!.controls["phone"].value,
      userId: this.user!.userId
    };

    this.httpService.put<User>(ApiConstants.userApi, body)
      .subscribe(() => this.updatedUserEvent.emit());
  }
}
