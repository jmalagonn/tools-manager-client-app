import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { RouteConstants } from 'src/app/Core/constants/app-constants';
import { ItemList } from 'src/app/Core/models/Item-list.model';
import { WorkItem } from 'src/app/Core/models/Work-item.model';
import { HttpService } from 'src/app/services/http.service';
import { WorkItemDetailModalComponent } from '../../components/work-item-detail-modal/work-item-detail-modal.component';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent {
  modalRef?: BsModalRef;
  workItem?: WorkItem;
  routeConstants = RouteConstants;

  constructor (
    private httpService: HttpService,
    private route: ActivatedRoute,    
    private modalService: BsModalService,
  ) {}

  ngOnInit(): void {
    this.getWorkItem();
  }

  getWorkItem() {
    const workItemId = this.route.snapshot.paramMap.get('id');

    this.httpService.get<WorkItem>(`WorkItem/${workItemId}`)
      .subscribe(response => {
        this.workItem = response;
      });
  }

  showWorkActivityLogDetail(item: ItemList) {
    const initialState: ModalOptions<WorkItemDetailModalComponent> = {
      initialState: {
        activityLog: this.workItem!.workItemActivityLogs!.find(x => x.workItemActivityLogId == item.id)
      },
      class: "modal-lg"
    };

    this.modalRef = this.modalService.show(WorkItemDetailModalComponent, initialState);
  }

  activityLogCreated() {    
    this.getWorkItem();
  }
}
