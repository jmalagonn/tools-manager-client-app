import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPlus, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Branch } from 'src/app/Core/models/Branch.model';
import { DropdownItem } from 'src/app/Core/models/Dropdown-item.model';
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

  @Input() branch?: Branch;

  @Output() woEvent = new EventEmitter<WorkOrder>(); 

  constructor(
    private httpService: HttpService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initWorkOrderForm();
    this.getWorkItemTypes();
  }

  getWorkItemTypes() {
    this.httpService.get<WorkItemType[]>('WorkItem/workItemTypes').subscribe(
      workItemTypes => this.workItemTypes = workItemTypes
    );
  }

  initWorkOrderForm() {
    this.workOrderForm = this.fb.group({
      workOrderDescription: ['']
    });
  }

  initWorkItemForm() {
    this.workItemForm = this.fb.group({
      equipmentId: [null, Validators.required],
      workItemDescription: [''],
      workItemTypeId: [null, Validators.required]
    })
  }

  setAddingItem(value: boolean): void {
    this.addingItem = value;
    if (this.addingItem) this.initWorkItemForm();
  }

  onSelectItem(item: DropdownItem, element: number) {
    element == 1
      ? this.workItemForm?.patchValue({ equipmentId: item.id })
      : this.workItemForm?.patchValue({ workItemTypeId: item.id });
  }

  onSaveWorkItem() {    
    this.tempWorkItems.push({
      createdOn: new Date().toISOString(),
      equipment: this.branch!.equipment!.find(x => x.equipmentId == this.workItemForm!.controls["equipmentId"].value)!,
      workItemDescription: this.workItemForm!.controls["workItemDescription"].value,
      workItemId: Date.now(),
      workItemType: this.workItemTypes!.find(x => x.workItemTypeId == this.workItemForm!.controls["workItemTypeId"].value)!,
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
        equipment: x.equipment,
        workItemDescription: x.workItemDescription,
        workItemType: x.workItemType,
      }))
    };

    this.woEvent.emit(workOrder);
  }
}