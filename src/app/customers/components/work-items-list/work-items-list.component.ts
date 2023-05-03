import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouteConstants } from 'src/app/Core/constants/app-constants';
import { WorkItem } from 'src/app/Core/models/Work-item.model';

@Component({
  selector: 'app-work-items-list',
  templateUrl: './work-items-list.component.html',
  styleUrls: ['./work-items-list.component.scss']
})
export class WorkItemsListComponent {
  routeConstants = RouteConstants;
  
  @Input() workItems?: WorkItem[];
  @Input() columns: string[] = ['Id', 'OT', 'Equipo', 'Asignado a', 'Estado'];
}
