import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SliderConfig } from 'src/app/Core/models/slider-config.model';
import { WorkItemActivityLog } from 'src/app/Core/models/Work-item-activity-log.model';

@Component({
  selector: 'app-work-item-detail-modal',
  templateUrl: './work-item-detail-modal.component.html',
  styleUrls: ['./work-item-detail-modal.component.scss']
})
export class WorkItemDetailModalComponent {
  activityLog?: WorkItemActivityLog;
  sliderConfig: SliderConfig = {
    interval: 0,
    noPause: true,
  };

  constructor(public bsModalRef: BsModalRef) {}
}
