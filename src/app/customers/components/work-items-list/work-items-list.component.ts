import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WorkItem } from 'src/app/Core/models/Work-item.model';

@Component({
  selector: 'app-work-items-list',
  templateUrl: './work-items-list.component.html',
  styleUrls: ['./work-items-list.component.scss']
})
export class WorkItemsListComponent {
  @Input() workItems?: WorkItem[];
  @Input() columns: string[] = ['Equipo', 'Tipo de mantenimiento', 'Descripción'];

  @Output() rowClickedEvent = new EventEmitter<WorkItem>();

  onRowClicked(item: WorkItem) {
    this.rowClickedEvent.emit(item);
  }
}
