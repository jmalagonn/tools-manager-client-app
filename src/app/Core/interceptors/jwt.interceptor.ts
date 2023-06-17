import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { Account } from '../models/Account.model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  currentAccount?: Account;

  constructor(
    private accountService: AccountService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        AccessControlAllowOrigin: '*'
      }
    })

    this.accountService.currentAccount$.pipe(take(1))
      .subscribe(account => this.currentAccount = account!);

      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Credentials": "true",
      // "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"

    if(this.currentAccount) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.currentAccount.token}`,
        }
      });
    }

    return next.handle(request);
  }
}
