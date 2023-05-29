import { Component, Input } from '@angular/core';
import { faCircleCheck, faCircleInfo, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Tool } from 'src/app/Core/models/Tool.model';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.scss']
})
export class ToolsListComponent {  
  faCircleInfo = faCircleInfo;
  faTriangleExclamation = faTriangleExclamation;
  faCircleCheck = faCircleCheck;
  
  @Input() tools?: Tool[];
  @Input() showActionColumns = true;
}
