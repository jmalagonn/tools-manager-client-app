import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstants } from '../Core/constants/app-constants';
import { UserRole } from '../Core/models/User-role.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpService: HttpService) { }

  getUserRoles(): Observable<UserRole[]> {
    return this.httpService.get<UserRole[]>(ApiConstants.userRolesApi);
  }
}
