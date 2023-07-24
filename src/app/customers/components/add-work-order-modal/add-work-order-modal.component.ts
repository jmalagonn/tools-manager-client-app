import { Component, Input, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Branch } from 'src/app/Core/models/Branch.model';
import { WorkOrder } from 'src/app/Core/models/Work-order.model';
import { HttpService } from 'src/app/services/http.service';
import { AddWorkOrderFormComponent } from '../add-work-order-form/add-work-order-form.component';

@Component({
  selector: 'app-add-work-order-modal',
  templateUrl: './add-work-order-modal.component.html',
  styleUrls: ['./add-work-order-modal.component.scss']
})
export class AddWorkOrderModalComponent {
  files: File[] = [];

  @Input() branch?: Branch;

  @ViewChild(AddWorkOrderFormComponent) addWorkOrderForm!: AddWorkOrderFormComponent;

  constructor(
    public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    private httpService: HttpService
  ) {}

  onSelectFile(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemoveFile(file: File) {
    this.files = this.files.filter(x => x != file);
  }

  onSaveWO(wo: WorkOrder) {
    if(!wo.workItems.length) {
      this.toastr.error("Debe agregar al menos un ítem de trabajo.");
      return;
    };

    const form = new FormData();

    const body: WorkOrder = {
      workOrderDescription: wo.workOrderDescription,
      customerId: wo.customerId,
      branchId: wo.branchId,
      workItems: wo.workItems,
      workState: wo.workState
    };

    this.httpService.post<WorkOrder>('WorkOrder', body).subscribe(
      workOrder => this.activeModal.close(workOrder)
    );
  } 
}
