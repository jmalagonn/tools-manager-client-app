import { Component, Input } from '@angular/core';
import { RouteConstants } from 'src/app/Core/constants/app-constants';
import { WorkItem } from 'src/app/Core/models/Work-item.model';

@Component({
  selector: 'app-work-item-general-info',
  templateUrl: './work-item-general-info.component.html',
  styleUrls: ['./work-item-general-info.component.scss']
})
export class WorkItemGeneralInfoComponent {
  routeConstants = RouteConstants;
  
  @Input() workItem?: WorkItem;
}
