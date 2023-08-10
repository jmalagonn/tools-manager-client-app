import { Component, Input, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Branch } from 'src/app/Core/models/Branch.model';
import { WorkOrder } from 'src/app/Core/models/workOrder/Work-order.model';
import { HttpService } from 'src/app/services/http.service';
import { AddWorkOrderFormComponent } from '../add-work-order-form/add-work-order-form.component';
import { AddWorkOrder } from 'src/app/Core/models/workOrder/Add-work-order.model';

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
    private httpService: HttpService
  ) {}

  onSelectFile(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemoveFile(file: File) {
    this.files = this.files.filter(x => x != file);
  }

  onSaveWO(wo: AddWorkOrder) {
    const formData = new FormData();

    formData.append("assignedUserId", wo.assignedUserId);
    formData.append("branchId", wo.branchId);
    formData.append("customerId", wo.customerId);
    formData.append("equipmentId", wo.equipmentId);
    formData.append("workOrderTypeId", wo.workOrderTypeId);
    formData.append("workOrderDescription", wo.workOrderDescription || "");
    this.files.map(file => {formData.append("files", file)});

    this.httpService.post<WorkOrder>('WorkOrder', formData).subscribe(
      workOrder => this.activeModal.close(workOrder)
    );
  } 
}
