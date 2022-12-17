import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Core/models/User.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-users-management-detail',
  templateUrl: './users-management-detail.component.html',
  styleUrls: ['./users-management-detail.component.scss']
})
export class UsersManagementDetailComponent implements OnInit {
  user?: User;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.getUser();
  };

  getUser(): void {    
    const toolId = this.route.snapshot.paramMap.get('id');

    this.httpService.get<User>(`Users/employee/${toolId}`)
      .subscribe(response => this.user = response);
  }
}
