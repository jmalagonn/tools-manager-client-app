import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { Branch } from 'src/app/Core/models/Branch.model';
import { DropdownItem } from 'src/app/Core/models/Dropdown-item.model';
import { Employee } from 'src/app/Core/models/Employee.model';
import { WorkOrderType } from 'src/app/Core/models/workOrder/Work-order-type';
import { AddWorkOrder } from 'src/app/Core/models/workOrder/Add-work-order.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-work-order-form',
  templateUrl: './add-work-order-form.component.html',
  styleUrls: ['./add-work-order-form.component.scss']
})
export class AddWorkOrderFormComponent implements OnInit {
  workOrderTypes?: WorkOrderType[];
  workOrderForm?: FormGroup;
  employees?: Employee[];

  @Input() branch?: Branch;

  @Output() woEvent = new EventEmitter<AddWorkOrder>(); 

  constructor(
    private httpService: HttpService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initWorkOrderForm();
    this.getWorkOrderTypes();
    this.getEmployees();
  }

  getWorkOrderTypes() {
    this.httpService.get<WorkOrderType[]>(ApiConstants.workOrderTypesApi).subscribe(
      workOrderTypes => this.workOrderTypes = workOrderTypes
    );
  }

  getEmployees() {
    this.httpService.get<Employee[]>(ApiConstants.userEmployeesApi).subscribe(
      employees => this.employees = employees
    );
  }

  initWorkOrderForm() {
    this.workOrderForm = this.fb.group({
      assignedUserId:       [null, Validators.required],
      equipmentId:          [null, Validators.required],
      workOrderTypeId:      [null, Validators.required],
      workOrderDescription: [''],
    });
  }

  onSelectItem(item: DropdownItem, element: number) {
    if (!this.workOrderForm) return;

    switch (element) {
      case 1:
        this.workOrderForm!.patchValue({ equipmentId: item.id })
        break;
      case 2:
        this.workOrderForm!.patchValue({ workOrderTypeId: item.id })
        break;
      case 3:
        this.workOrderForm!.patchValue({ assignedUserId: item.id })
        break;
    }
  }

  emitWOInfo() {
    if (!this.branch || 
      !this.workOrderForm ||
      !this.workOrderForm.valid) return;

    const workOrder: AddWorkOrder = {
      assignedUserId: this.workOrderForm.controls["assignedUserId"].value,
      branchId: this.branch.branchId!.toString(),
      customerId: this.branch.customerId!.toString(),
      equipmentId: this.workOrderForm.controls["equipmentId"].value,
      workOrderTypeId: this.workOrderForm.controls["workOrderTypeId"].value,
      workOrderDescription: this.workOrderForm.controls["workOrderDescription"].value,
    };

    this.woEvent.emit(workOrder);
  }
}
