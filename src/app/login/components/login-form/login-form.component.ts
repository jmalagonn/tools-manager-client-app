import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { Account } from 'src/app/Core/models/Account.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  faLock = faLock;
  loginForm?: FormGroup;

  @Output() submitEvent = new EventEmitter<Account>();

  constructor(private fb: FormBuilder, private httpService: HttpService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      id: ['', [Validators.required, this.onlyNumbersValidator]],
    })
  }

  onSubmit() {
    const body = {
      id: this.loginForm?.controls["id"].value,
    }

    this.httpService.post<Account>(ApiConstants.accountLogin, body).subscribe(response => { 
      this.submitEvent.emit(response);
    })
  }

  onlyNumbersValidator(control: AbstractControl) {  
    const regex = new RegExp("[^0-9]"); 
    
    if (regex.test(control.value)) {
      return { invalidId: true };
    }
    
    return null;
  }
}


