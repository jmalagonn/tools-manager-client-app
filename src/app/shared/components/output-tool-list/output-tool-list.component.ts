import { Component, Input } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { ListActions } from 'src/app/Core/enums/List-actions.enum';
import { OutputTool } from 'src/app/Core/models/Output-tool.model';

@Component({
  selector: 'output-tool-list',
  templateUrl: './output-tool-list.component.html',
  styleUrls: ['./output-tool-list.component.scss']
})
export class OutputToolListComponent {
  faCircleInfo = faCircleInfo;

  @Input() outputsTool?: OutputTool[];
  @Input() actions?: ListActions[];
}
