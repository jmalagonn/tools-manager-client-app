import { Component, Input } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { RouteConstants } from 'src/app/Core/constants/app-constants';
import { ListActions } from 'src/app/Core/enums/List-actions.enum';
import { ToolOutput } from 'src/app/Core/models/Tool-output.model';

@Component({
  selector: 'output-tool-list',
  templateUrl: './output-tool-list.component.html',
  styleUrls: ['./output-tool-list.component.scss']
})
export class OutputToolListComponent {
  faCircleInfo = faCircleInfo;
  routeConstants = RouteConstants;

  @Input() outputsTool?: ToolOutput[];
  @Input() actions?: ListActions[];
}
