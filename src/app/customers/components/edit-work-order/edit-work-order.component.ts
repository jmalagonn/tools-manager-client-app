import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { Branch } from 'src/app/Core/models/Branch.model';
import { DropdownItem } from 'src/app/Core/models/Dropdown-item.model';
import { Employee } from 'src/app/Core/models/Employee.model';
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
    }
  }

  initForm() {
    if (!this.workOrder) return;

    this.workOrderForm = this.fb.group({
      assignedUserId: [this.workOrder.assignedUserId, Validators.required],
      branchId: [this.workOrder.branchId, Validators.required],
      customerCode: [this.workOrder.customerCode],
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
      internalCode: this.workOrderForm.controls["internalCode"].value,
      workState: this.workOrderForm.controls["workState"].value,
    }

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
      this.workOrderForm?.patchValue({
        branchId: selectedBranch.id
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
