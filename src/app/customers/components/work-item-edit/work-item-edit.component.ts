import { Component, Input } from '@angular/core';
import { WorkItem } from 'src/app/Core/models/Work-item.model';

@Component({
  selector: 'app-work-item-edit',
  templateUrl: './work-item-edit.component.html',
  styleUrls: ['./work-item-edit.component.scss']
})
export class WorkItemEditComponent {
  @Input() workItem?: WorkItem;
}
