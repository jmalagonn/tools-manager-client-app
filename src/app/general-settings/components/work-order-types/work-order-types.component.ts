import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { WorkOrderType } from 'src/app/Core/models/workOrder/Work-order-type';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-work-order-types',
  templateUrl: './work-order-types.component.html',
  styleUrls: ['./work-order-types.component.scss']
})
export class WorkOrderTypesComponent implements OnInit {
  workOrderTypes?: WorkOrderType[];
  faEdit = faEdit;
  isAddingNewItem = false;
  addNewItemForm?: FormGroup;

  constructor(
    private httpService: HttpService,
    private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.getWorkOrderTypes();
  }

  getWorkOrderTypes(): void {
    this.httpService.get<WorkOrderType[]>(ApiConstants.workOrderTypesApi)
      .subscribe(response => this.workOrderTypes = response);
  }

  setIsAddingNewItem(value: boolean) {
    this.isAddingNewItem = value;
  }

  onClickAddNewItem() {
    this.initForm();
    this.setIsAddingNewItem(true);
  }

  initForm() {
    this.addNewItemForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.addNewItemForm?.valid) return;

    this.setIsAddingNewItem(false);
    const body = {
      name: this.addNewItemForm.controls["name"].value
    };

    this.httpService.post<WorkOrderType>(ApiConstants.workOrderTypeApi, body)
      .subscribe(() => {
        this.getWorkOrderTypes();
      });
  }
}
