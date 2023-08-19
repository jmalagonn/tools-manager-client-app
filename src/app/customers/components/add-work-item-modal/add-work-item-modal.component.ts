import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { DropdownItem } from 'src/app/Core/models/Dropdown-item.model';
import { Employee } from 'src/app/Core/models/Employee.model';
import { Equipment } from 'src/app/Core/models/Equipment.model';
import { WorkItem } from 'src/app/Core/models/Work-item.model';
import { WorkOrder } from 'src/app/Core/models/workOrder/Work-order.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-work-item-modal',
  templateUrl: './add-work-item-modal.component.html',
  styleUrls: ['./add-work-item-modal.component.scss']
})
export class AddWorkItemModalComponent implements OnInit {
  workItem?: WorkItem;
  workItemForm?: FormGroup;
  equipment?: Equipment[];
  employees?: Employee[];

  @Input() workOrder?: WorkOrder;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.getEquipment();
    this.getWorkItemTypes();
    this.getEmployees();
    this.initForm();
  }

  getEquipment(): void {
    this.httpService.get<Equipment[]>(`${ApiConstants.equipmentApi}?BranchId=${this.workOrder!.branchId}`)
      .subscribe(result => this.equipment = result);
  }

  getWorkItemTypes(): void {}

  getEmployees(): void {
    this.httpService.get<Employee[]>(`${ApiConstants.userEmployeesApi}`)
      .subscribe(result => this.employees = result);
  }

  initForm() {
    this.workItemForm = this.fb.group({
      assignedUserId: [null, Validators.required],
      equipment: [null, Validators.required],
      workItemTypeId: [null, Validators.required],
      workItemDescription: ['', Validators.required]
    })
  }

  selectedDwElement(item: DropdownItem, option: number): void {
    switch(option) {
      case 1:
        this.workItemForm!.patchValue({ equipment: this.equipment!.find(x => x.id = item.id) });
        break;
      case 2:
        this.workItemForm!.patchValue({ workItemTypeId: item.id });
        break;
      case 3:
        this.workItemForm!.patchValue({ assignedUserId: item.id });
        break;
    }
  }

  submitWorkItem() {
    if (!this.workItemForm || !this.workItemForm!.valid) return;

    const body: WorkItem = {
      assignedUserId: this.workItemForm!.controls["assignedUserId"].value,
      equipment: this.workItemForm!.controls["equipment"].value,
      workItemTypeId: this.workItemForm!.controls["workItemTypeId"].value,
      workItemDescription: this.workItemForm!.controls["workItemDescription"].value,
      workOrderId: this.workOrder!.workOrderId!
    };

    this.httpService.post<WorkItem>(ApiConstants.workItemApi, body)
      .subscribe(response => this.activeModal.close(true));
  }
}
