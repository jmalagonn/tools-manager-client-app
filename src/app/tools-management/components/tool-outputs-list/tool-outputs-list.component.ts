import { Component, Input } from '@angular/core';
import { RouteConstants } from 'src/app/Core/constants/app-constants';
import { ToolOutput } from 'src/app/Core/models/Tool-output.model';

@Component({
  selector: 'app-tool-outputs-list',
  templateUrl: './tool-outputs-list.component.html',
  styleUrls: ['./tool-outputs-list.component.scss']
})
export class ToolOutputsListComponent {
  routeConstants = RouteConstants;
  
  @Input() toolOutputs?: ToolOutput[];
}
