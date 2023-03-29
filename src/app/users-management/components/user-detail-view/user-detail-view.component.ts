import { Component, Input } from '@angular/core';
import { User } from 'src/app/Core/models/User.model';

@Component({
  selector: 'app-user-detail-view',
  templateUrl: './user-detail-view.component.html',
  styleUrls: ['./user-detail-view.component.scss']
})
export class UserDetailViewComponent {
  @Input() user?: User;
}
