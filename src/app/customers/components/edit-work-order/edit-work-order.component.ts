import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { Branch } from 'src/app/Core/models/Branch.model';
import { DropdownItem } from 'src/app/Core/models/Dropdown-item.model';
import { Employee } from 'src/app/Core/models/Employee.model';
import { Equipment } from 'src/app/Core/models/Equipment.model';
import { WorkState } from 'src/app/Core/models/Work-state.model';
import { WorkOrder } from 'src/app/Core/models/workOrder/Work-order.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-edit-work-order',
  templateUrl: './edit-work-order.component.html',
  styleUrls: ['./edit-work-order.component.scss']
})
export class EditWorkOrderComponent implements OnChanges {
  workOrderForm?: FormGroup;
  employees?: Employee[];
  branches?: Branch[];
  equipment?: Equipment[];
  workOrderStates?: WorkState[];

  @Input() workOrder?: WorkOrder;

  @Output() workOrderUpdatedEvent = new EventEmitter<void>();
  @Output() cancelUpdateEvent = new EventEmitter<void>();

  constructor(
    private httpService: HttpService,
    private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.workOrder) {
      this.initForm();
      this.getCustomerBranches();
      this.getEmployeesList();
      this.getWorkOrderStates();
      this.getEquipment();
    }
  }

  initForm() {
    if (!this.workOrder) return;

    console.log(this.workOrder);

    this.workOrderForm = this.fb.group({
      assignedUserId: [this.workOrder.assignedUserId, Validators.required],
      branchId: [this.workOrder.branchId, Validators.required],
      customerCode: [this.workOrder.customerCode],
      description: [this.workOrder.workOrderDescription],
      equipmentId: [this.workOrder.equipmentId],
      internalCode: [this.workOrder.internalCode],
      workState: [this.workOrder.workState, Validators.required]
    });
  }

  onSubmit() {
    if (!this.workOrder || !this.workOrderForm || !this.workOrderForm.valid) return;

    const workOrder: WorkOrder = {
      ...this.workOrder,
      assignedUserId: this.workOrderForm.controls["assignedUserId"].value,
      branchId: this.workOrderForm.controls["branchId"].value,
      customerCode: this.workOrderForm.controls["customerCode"].value,
      equipmentId: this.workOrderForm.controls["equipmentId"].value,
      internalCode: this.workOrderForm.controls["internalCode"].value,
      workOrderDescription: this.workOrderForm.controls["description"].value,
      workState: this.workOrderForm.controls["workState"].value,
    };

    this.httpService.put(ApiConstants.workOrderApi, workOrder)
      .subscribe(() => this.workOrderUpdatedEvent.emit());
  }

  getCustomerBranches() {
    if (!this.workOrder) return;

    this.httpService.get<Branch[]>(`${ApiConstants.branchesApi}/${this.workOrder.customerId}`)
      .subscribe(response => this.branches = response);
  }

  onSelectBranch(branch: DropdownItem): void {
    if (!this.workOrderForm) return;

    const selectedBranch = this.branches!.find(x => x.id == branch.id);
    
    if (selectedBranch) {
      this.getEquipment(selectedBranch.id);
      this.workOrderForm.patchValue({
        branchId: selectedBranch.id
      });
    }
  }

  getEquipment(branchId: number = 0) {
    if (branchId == 0)
      branchId = this.workOrder!.branchId;

    this.httpService.get<Equipment[]>(`${ApiConstants.equipmentApi}?branchId=${branchId}`)
      .subscribe(response => this.equipment = response);
  }

  onSelectEquipment(equipment: DropdownItem): void {
    if (!this.workOrderForm) return;

    const selectedEquipment = this.equipment!.find(x => x.id == equipment.id);
    
    if (selectedEquipment) {
      this.workOrderForm.patchValue({
        equipmentId: selectedEquipment.id
      });
    }
  }

  getEmployeesList() {
    if (!this.workOrder) return;

    this.httpService.get<Employee[]>(`${ApiConstants.userEmployeesApi}`)
      .subscribe(response => this.employees = response);
  }

  onSelectEmployee(employee: DropdownItem): void {
    if (!this.workOrderForm) return;

    const selectedEmployee = this.employees!.find(x => x.userId == employee.id);

    if (selectedEmployee) {
      this.workOrderForm?.patchValue({
        assignedUserId: selectedEmployee.userId
      });
    }
  }

  getWorkOrderStates() {
    if (!this.workOrder) return;

    this.httpService.get<WorkState[]>(`${ApiConstants.workStateApi}`)
      .subscribe(response => this.workOrderStates = response);
  }

  onSelectWorkOrderState(state: DropdownItem): void {
    if (!this.workOrderForm) return;
    
    const selectedWorkOrderState = this.workOrderStates!.find(x => x.id == state.id);

    if (selectedWorkOrderState) {
      this.workOrderForm?.patchValue({
        workState: selectedWorkOrderState
      });
    }
  }
}
