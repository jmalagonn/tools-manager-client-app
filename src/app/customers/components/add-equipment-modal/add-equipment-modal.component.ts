import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
      equipmentName: ['', Validators.required]
    });
  }

  onSubmit() {
    const body = {
      equipmentName: this.addEquipmentForm!.controls["equipmentName"].value,
      branchId: this.branch!.branchId
    };

    this.httpService.post<Equipment>('Equipment', body).subscribe(equipment => {
      this.activeModal.close(equipment);
    });
  }  

  setAddNewParameter(value: boolean) {
    this.addNewParameter = value;
  }

  onAddEquipmentParameter(parameter: EquipmentParameter, isNewParameter: boolean = false): void {
    this.setAddNewParameter(false);

    return isNewParameter 
      ? this.addNewEquipmentParameter(parameter) 
      : this.addEquipmentParameter(parameter); 
  }

  addEquipmentParameter(parameter: EquipmentParameter) {
    this.equipmentParameters.push(parameter);
  }

  addNewEquipmentParameter(parameter: EquipmentParameter) {}
}
