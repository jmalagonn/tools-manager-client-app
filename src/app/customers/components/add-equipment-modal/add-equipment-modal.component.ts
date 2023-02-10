import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Equipment } from 'src/app/Core/models/Equipment.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-equipment-modal',
  templateUrl: './add-equipment-modal.component.html',
  styleUrls: ['./add-equipment-modal.component.scss']
})
export class AddEquipmentModalComponent implements OnInit {
  addEquipmentForm?: FormGroup;
  branchId?: number;

  constructor(
    public bsModalRef: BsModalRef,    
    public fb: FormBuilder,    
    public httpService: HttpService) {}

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
      branchId: this.branchId
    };

    this.httpService.post<Equipment>('Equipment', body).subscribe(equipment => {
      this.bsModalRef.hide();
      this.bsModalRef.onHide.emit(equipment);
    });
  }
}
