import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { Branch } from 'src/app/Core/models/Branch.model';
import { Equipment } from 'src/app/Core/models/Equipment.model';
import { Parameter } from 'src/app/Core/models/Parameter.model';
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
    // const body = {
    //   branchId: this.branch!.branchId,
    //   customerId: this.branch!.customerId,
    //   equipmentName: this.addEquipmentForm!.controls["equipmentName"].value,
    //   equipmentDescription: this.addEquipmentForm!.controls["equipmentDescription"].value,
    //   equipmentParameters: this.equipmentParameters!.map(x => ({
    //     equipmentParameterId: x.equipmentParameterId,
    //     name: x.name,
    //     parameterValue: x.parameterValue || 0,
    //     measurementUnitId: x.measurementUnitId
    //   }))
    // };

    // this.httpService.post<Equipment>('Equipment', body).subscribe(equipment => {
    //   this.activeModal.close(equipment);
    // });
  }  

  setAddNewParameter(value: boolean) {
    this.addNewParameter = value;
  }

  getEquipmentParameters(): void {
    this.httpService.get<Parameter[]>(ApiConstants.equipmentParametersApi)
      .subscribe(response => this.allEquipmentParameters = response);
  }

  onNewParameterAdded(parameter: Parameter): void {
    this.parametersToAdd.push(parameter);
  }
}
