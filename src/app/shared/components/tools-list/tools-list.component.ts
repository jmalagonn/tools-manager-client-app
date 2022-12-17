import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCircleCheck, faCircleInfo, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { ListActions } from 'src/app/Core/enums/List-actions.enum';
import { Tool } from 'src/app/Core/models/Tool.model';

@Component({
  selector: 'tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.scss']
})
export class ToolsListComponent {
  faCircleInfo = faCircleInfo;
  faCircleCheck = faCircleCheck;
  faTriangleExclamation = faTriangleExclamation;
  listActions = ListActions;

  @Input() tools?: Tool[];
  @Input() actions?: ListActions[];

  @Output() actionButtonClickedEvent = new EventEmitter<object>();

  actionButtonClicked(tool: Tool, action: ListActions) {
    this.actionButtonClickedEvent.emit({
      tool, action
    })
  }
}
