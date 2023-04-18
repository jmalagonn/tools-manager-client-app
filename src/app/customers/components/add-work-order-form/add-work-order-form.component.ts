import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPlus, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { Branch } from 'src/app/Core/models/Branch.model';
import { DropdownItem } from 'src/app/Core/models/Dropdown-item.model';
import { Employee } from 'src/app/Core/models/Employee.model';
import { WorkItemType } from 'src/app/Core/models/Work-item-type';
import { WorkItem } from 'src/app/Core/models/Work-item.model';
import { WorkOrder } from 'src/app/Core/models/Work-order.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-work-order-form',
  templateUrl: './add-work-order-form.component.html',
  styleUrls: ['./add-work-order-form.component.scss']
})
export class AddWorkOrderFormComponent implements OnInit {
  faPlus = faPlus;
  faSave = faSave;
  faTrash = faTrash;
  workItemTypes?: WorkItemType[];
  addingItem = false;
  workItemForm?: FormGroup;
  workOrderForm?: FormGroup;
  tempWorkItems: WorkItem[] = [];
  employees?: Employee[];

  @Input() branch?: Branch;

  @Output() woEvent = new EventEmitter<WorkOrder>(); 

  constructor(
    private httpService: HttpService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initWorkOrderForm();
    this.getWorkItemTypes();
    this.getEmployees();
  }

  getWorkItemTypes() {
    this.httpService.get<WorkItemType[]>(ApiConstants.workItemTypesApi).subscribe(
      workItemTypes => this.workItemTypes = workItemTypes
    );
  }

  getEmployees() {
    this.httpService.get<Employee[]>(ApiConstants.userEmployeesApi).subscribe(
      employees => this.employees = employees
    );
  }

  initWorkOrderForm() {
    this.workOrderForm = this.fb.group({
      workOrderDescription: ['']
    });
  }

  initWorkItemForm() {
    this.workItemForm = this.fb.group({
      assignedUserId:       [null, Validators.required],
      equipmentId:          [null, Validators.required],
      workItemDescription:  ['', Validators.required],
      workItemTypeId:       [null, Validators.required],
    })
  }

  setAddingItem(value: boolean): void {
    this.addingItem = value;
    if (this.addingItem) this.initWorkItemForm();
  }

  onSelectItem(item: DropdownItem, element: number) {
    switch (element) {
      case 1:
        this.workItemForm!.patchValue({ equipmentId: item.id })
        break;
      case 2:
        this.workItemForm!.patchValue({ workItemTypeId: item.id })
        break;
      case 3:
        this.workItemForm!.patchValue({ assignedUserId: item.id })
        break;
    }
  }

  onSaveWorkItem() {    
    this.tempWorkItems.push({
      assignedUserId: this.workItemForm!.controls["assignedUserId"].value,
      assignedUserName: this.employees!.find(x => x.userId == this.workItemForm!.controls["assignedUserId"].value)!.name,
      createdOn: new Date().toISOString(),
      equipment: this.branch!.equipment!.find(x => x.equipmentId == this.workItemForm!.controls["equipmentId"].value)!,
      workItemDescription: this.workItemForm!.controls["workItemDescription"].value,
      workItemId: 0,
      workItemTypeId: this.workItemForm!.controls["workItemTypeId"].value,
      workItemTypeName: this.workItemTypes!.find(x => x.workItemTypeId == this.workItemForm!.controls["workItemTypeId"].value)?.workItemTypeName,
      workOrderId: 0,
    });

    this.setAddingItem(false);
  }

  emitWOInfo() {
    const workOrder: WorkOrder = {
      workOrderId: Date.now(),
      workOrderDescription: this.workOrderForm?.controls["workOrderDescription"].value,
      customerId: this.branch!.customerId!,
      customerName: this.branch!.customerName!,
      branchId: this.branch!.branchId!,
      branchName: this.branch!.branchName!,
      workItems: this.tempWorkItems.map(x => ({
        assignedUserId: x.assignedUserId,
        createdOn: x.createdOn,
        equipment: x.equipment,
        workItemDescription: x.workItemDescription,
        workItemId: x.workItemId,
        workItemTypeId: x.workItemTypeId,
        workOrderId: x.workOrderId
      }))
    };

    this.woEvent.emit(workOrder);
  }
}
