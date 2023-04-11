import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { Branch } from 'src/app/Core/models/Branch.model';
import { EquipmentParameter } from 'src/app/Core/models/Equipment-parameter.model';
import { Equipment } from 'src/app/Core/models/Equipment.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-equipment-modal',
  templateUrl: './add-equipment-modal.component.html',
  styleUrls: ['./add-equipment-modal.component.scss']
})
export class AddEquipmentModalComponent implements OnInit {
  addEquipmentForm?: FormGroup;
  addNewParameter: boolean = false;
  equipmentParameters: EquipmentParameter[] = [];

  @Input() branch?: Branch;

  constructor(
    public activeModal: NgbActiveModal,    
    private fb: FormBuilder,    
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addEquipmentForm = this.fb.group({
      equipmentName: ['', Validators.required],
      equipmentDescription: []
    });
  }

  async onSubmit() {
    const body = {
      branchId: this.branch!.branchId,
      customerId: this.branch!.customerId,
      equipmentName: this.addEquipmentForm!.controls["equipmentName"].value,
      equipmentDescription: this.addEquipmentForm!.controls["equipmentDescription"].value,
      equipmentParameters: this.equipmentParameters!.map(x => ({
        equipmentParameterId: x.equipmentParameterId,
        name: x.name,
        parameterValue: x.parameterValue || 0,
        measurementUnitId: x.measurementUnitId
      }))
    };

    this.httpService.post<Equipment>('Equipment', body).subscribe(equipment => {
      this.activeModal.close(equipment);
    });
  }  

  setAddNewParameter(value: boolean) {
    this.addNewParameter = value;
  }

  onAddEquipmentParameter(parameter: EquipmentParameter): void {
    this.setAddNewParameter(false);
    this.addEquipmentParameter(parameter); 
  }

  addEquipmentParameter(parameter: EquipmentParameter) {
    this.equipmentParameters.push(parameter);
  }

  createNewEquipmentParameters(parameters: EquipmentParameter[]): Promise<EquipmentParameter[]> {
    const result = new Promise<EquipmentParameter[]>((resolve) => {
      const newParams: EquipmentParameter[] = [];

      parameters.map((x: EquipmentParameter, index: number) => {
        this.httpService.post<EquipmentParameter>(ApiConstants.equipmentParametersApi, x)
          .subscribe(response => {
            newParams.push(response);
  
            if (index == parameters.length - 1)
              resolve(newParams);
          })
      });
    });

    return result;
  }
}
