import { Component, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
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
  branch?: Branch;

  @ViewChild(AddWorkOrderFormComponent) addWorkOrderForm!: AddWorkOrderFormComponent;

  constructor(
    public bsModalRef: BsModalRef,
    private toastr: ToastrService,
    private httpService: HttpService
  ) {}

  onSaveWO(wo: WorkOrder) {
    if(!wo.workItems.length) {
      this.toastr.error("Debe agregar al menos un ítem de trabajo.");
      return;
    };

    const body = {
      workOrderDescription: wo.workOrderDescription,
      customerId: wo.customerId,
      branchId: wo.branchId,
      workItems: wo.workItems,
    };

    this.httpService.post<WorkOrder>('WorkOrder', body).subscribe(
      response => { console.log(response) 
    });
  } 
}
