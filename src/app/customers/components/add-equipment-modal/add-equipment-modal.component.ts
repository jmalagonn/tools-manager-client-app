import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { Branch } from 'src/app/Core/models/Branch.model';
import { Equipment } from 'src/app/Core/models/Equipment.model';
import { Parameter } from 'src/app/Core/models/Parameter.model';
import { AddEquipment } from 'src/app/Core/models/equipment/Add-equipment.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-equipment-modal',
  templateUrl: './add-equipment-modal.component.html',
  styleUrls: ['./add-equipment-modal.component.scss']
})
export class AddEquipmentModalComponent implements OnInit {
  addEquipmentForm?: FormGroup;
  addNewParameter: boolean = false;
  allEquipmentParameters: Parameter[] = [];
  parametersToAdd: Parameter[] = [];
  newEquipment?: Equipment;

  @Input() branch?: Branch;

  constructor(
    public activeModal: NgbActiveModal,    
    private fb: FormBuilder,    
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.initForm();
    this.getEquipmentParameters();
  }

  initForm() {
    this.addEquipmentForm = this.fb.group({
      equipmentName: ['', Validators.required],
      equipmentDescription: [],
    });
  }

  onSubmit() {
    if (!this.branch ||
      !this.addEquipmentForm?.valid ||
      !this.parametersToAdd)
      return;

    const body: AddEquipment = {
      branchId: this.branch.branchId!,
      customerId: this.branch.customerId!,
      description: this.addEquipmentForm.controls["equipmentDescription"].value,
      name: this.addEquipmentForm.controls["equipmentName"].value,
      parameters: this.parametersToAdd
    };

    this.httpService.post<Equipment>(ApiConstants.equipmentApi, body)
      .subscribe(response => this.activeModal.close(response));
  }  

  setAddNewParameter(value: boolean) {
    this.addNewParameter = value;
  }

  getEquipmentParameters(): void {
    this.httpService.get<Parameter[]>(ApiConstants.equipmentParametersApi)
      .subscribe(response => this.allEquipmentParameters = response);
  }

  onNewParameterAdded(parameter: Parameter): void {
    console.log(parameter);
    this.parametersToAdd = [...this.parametersToAdd, parameter];
  }
}
