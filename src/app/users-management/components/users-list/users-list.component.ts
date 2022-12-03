import { Component, Input } from '@angular/core';
import { faCircleInfo, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/Core/models/User.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  faPen = faPen;
  faTrash = faTrash;
  faCircleInfo = faCircleInfo;
  
  @Input() users?: User[];
}