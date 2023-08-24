import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ErrorConstants, RouteConstants } from 'src/app/Core/constants/app-constants';
import { ItemList } from 'src/app/Core/models/Item-list.model';
import { WorkItem } from 'src/app/Core/models/Work-item.model';
import { HttpService } from 'src/app/services/http.service';
import { WorkItemDetailModalComponent } from '../../components/work-item-detail-modal/work-item-detail-modal.component';
import { ToastrService } from 'ngx-toastr';
import { WorkState } from 'src/app/Core/models/Work-state.model';
import { ApiConstants } from 'src/app/Core/constants/api-constants';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent {
  modalRef?: BsModalRef;
  workItem?: WorkItem;
  routeConstants = RouteConstants;  
  workStates?: WorkState[];

  constructor (
    private httpService: HttpService,
    private route: ActivatedRoute,    
    private modalService: BsModalService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getWorkItem();
    this.getWorkStates();
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

  getWorkStates() {
    this.httpService.get<WorkState[]>(ApiConstants.workStateApi)
      .subscribe(response => this.workStates = response);
  }
  
  closeWorkItem() {
    if (!this.workItem!.workItemActivityLogs?.length) {
      this.toastrService.error(ErrorConstants.atLeastOneActivityLogMusBeAdded);
      return;
    }

    const params = {
      workItemId: this.workItem!.workItemId!.toString(),
      workStateId: this.workStates!.find(x => x.id == 3)!.id.toString()
    };
  }
}
