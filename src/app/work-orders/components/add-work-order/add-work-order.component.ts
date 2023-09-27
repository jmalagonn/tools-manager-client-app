import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { Branch } from 'src/app/Core/models/Branch.model';
import { Customer } from 'src/app/Core/models/Customer.model';
import { DropdownItem } from 'src/app/Core/models/Dropdown-item.model';
import { Employee } from 'src/app/Core/models/Employee.model';
import { Equipment } from 'src/app/Core/models/Equipment.model';
import { User } from 'src/app/Core/models/User.model';
import { AddWorkOrder } from 'src/app/Core/models/workOrder/Add-work-order.model';
import { WorkOrderType } from 'src/app/Core/models/workOrder/Work-order-type';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-work-order',
  templateUrl: './add-work-order.component.html',
  styleUrls: ['./add-work-order.component.scss']
})
export class AddWorkOrderComponent implements OnInit {
  workOrderForm?: FormGroup;
  workOrderProperties = workOrderProperties;
  customers?: Customer[];
  branches?: Branch[];
  users?: Employee[];
  equipment?: Equipment[];
  workOrderTypes?: WorkOrderType[];

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private httpService: HttpService) { }

  ngOnInit(): void {
    this.initForm();
    this.getCustomers();
    this.getUsers();
    this.getWorkOrderTypes();
  }

  initForm() {
    this.workOrderForm = this.fb.group({
      customerId: [null, Validators.required],
      branchId: [null, Validators.required],
      equipmentId: [null],
      userId: [null, Validators.required],
      workOrderTypeId: [null, Validators.required],
      internalCode: [""],
      customerCode: [""],
      description: [""]
    });
  }

  onSelectItem(item: DropdownItem, property: number) {
    if (!this.workOrderForm) return;

    switch (property) {
      case workOrderProperties.customer:
        this.workOrderForm.patchValue({ customerId: item.id });
        this.getBranches();
        break;
      case workOrderProperties.branch:
        this.workOrderForm.patchValue({ branchId: item.id });
        this.getEquipment();
        break;
      case workOrderProperties.equipment:
        this.workOrderForm.patchValue({ equipmentId: item.id });
        break;
      case workOrderProperties.workOrderType:
        this.workOrderForm.patchValue({ workOrderTypeId: item.id });
        break;
      case workOrderProperties.user:
        this.workOrderForm.patchValue({ userId: item.id });
        break;
    }
  }

  saveWorkOrder() {
    if (!this.workOrderForm || !this.workOrderForm.valid) return;

    const data = new FormData();
    data.append("assignedUserId", this.workOrderForm.controls["userId"].value.toString());
    data.append("branchId", this.workOrderForm.controls["branchId"].value.toString());
    data.append("customerId", this.workOrderForm.controls["customerId"].value.toString());
    data.append("workOrderTypeId", this.workOrderForm.controls["workOrderTypeId"].value.toString());
    data.append("internalCode", this.workOrderForm.controls["internalCode"].value.toString());
    data.append("customerCode", this.workOrderForm.controls["customerCode"].value.toString());
    data.append("workOrderDescription", this.workOrderForm.controls["description"].value.toString());

    this.httpService.post<AddWorkOrder>(ApiConstants.workOrderApi, data).subscribe();
  }

  getUsers() {
    this.httpService.get<Employee[]>(ApiConstants.userEmployeesApi)
      .subscribe(response => this.users = response);
  }

  getCustomers() {
    this.httpService.get<Customer[]>(ApiConstants.customersApi)
      .subscribe(response => this.customers = response);
  }

  getWorkOrderTypes() {
    this.httpService.get<WorkOrderType[]>(ApiConstants.workOrderTypesApi)
      .subscribe(response => this.workOrderTypes = response);
  }

  getBranches() {
    if (!this.workOrderForm) return;

    this.httpService
      .get<Branch[]>(`${ApiConstants.branchesApi}/${this.workOrderForm.controls["customerId"].value}`)
      .subscribe(response => this.branches = response);
  }

  getEquipment() {
    if (!this.workOrderForm) return;

    this.httpService
      .get<Equipment[]>(`${ApiConstants.equipmentApi}?branchId=${this.workOrderForm.controls["branchId"].value}`)
      .subscribe(response => this.equipment = response);
  }
}

enum workOrderProperties {
  customer = 0,
  branch,
  equipment,
  workOrderType,
  user
}
