import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEdit, faSave, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { WorkOrderType } from 'src/app/Core/models/workOrder/Work-order-type';
import { HttpService } from 'src/app/services/http.service';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

interface EditableWorkOrderType extends WorkOrderType {
  isEditing: boolean;
}

@Component({
  selector: 'app-work-order-types',
  templateUrl: './work-order-types.component.html',
  styleUrls: ['./work-order-types.component.scss']
})
export class WorkOrderTypesComponent implements OnInit {
  workOrderTypes?: EditableWorkOrderType[];
  faEdit = faEdit;
  faTrash = faTrash;
  faX = faX;
  faSave = faSave;
  isAddingNewItem = false;
  addNewItemForm?: FormGroup;
  workOrderTypeName?: string;

  constructor(
    private httpService: HttpService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService) {}
  
  ngOnInit(): void {
    this.getWorkOrderTypes();
  }

  getWorkOrderTypes(): void {
    this.httpService.get<WorkOrderType[]>(ApiConstants.workOrderTypesApi)
      .subscribe(response => {
        this.workOrderTypes = [];

        response.map(x => this.workOrderTypes!.push({
          ...x,
          isEditing: false
        }));
      });
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

  onClickTrashButton(item: EditableWorkOrderType) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.closed.subscribe(result => result && this.deleteElement(item));
  }

  onClickEditButton(item: EditableWorkOrderType) {
    this.workOrderTypeName = item.name;
    item.isEditing = true;
  }

  onClickSaveButton(item: EditableWorkOrderType) {
    item.isEditing = false;
    const body = {
      id: item.id,
      name: this.workOrderTypeName
    };

    this.httpService.put<boolean>(`${ApiConstants.workOrderTypeApi}`, body)
      .subscribe(() => {
        this.toastr.success("Elemento actualizado.");
        this.getWorkOrderTypes();
      });
  }

  onClickCancelButton(item: EditableWorkOrderType) {
    item.isEditing = false;
  }

  deleteElement(item: EditableWorkOrderType) {
    this.httpService.delete<boolean>(`${ApiConstants.workOrderTypeApi}/${item.id}`)
      .subscribe(() => {
        this.toastr.info("Eliminación realizada con éxito.")
        this.getWorkOrderTypes();
      });   
  }
}
