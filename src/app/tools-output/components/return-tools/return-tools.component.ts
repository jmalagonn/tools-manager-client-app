import { Component } from '@angular/core';
import { faCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { OutputTool } from 'src/app/Core/models/Output-tool.model';

@Component({
  selector: 'app-return-tools',
  templateUrl: './return-tools.component.html',
  styleUrls: ['./return-tools.component.scss']
})
export class ReturnToolsComponent {
  outputTool?: OutputTool;
  faCheck = faCheck;
  faTriangleExclamation = faTriangleExclamation;

  constructor(
    public bsModalRef: BsModalRef) { }
}
