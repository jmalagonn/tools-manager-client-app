import { HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faImage, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { HttpService } from 'src/app/services/http.service';
import { UploadFilesModalComponent } from 'src/app/shared/components/upload-files-modal/upload-files-modal.component';

@Component({
  selector: 'app-new-work-item-activity-log',
  templateUrl: './new-work-item-activity-log.component.html',
  styleUrls: ['./new-work-item-activity-log.component.scss']
})
export class NewWorkItemActivityLogComponent {
  faSave = faSave;
  faTrash = faTrash;
  faImage = faImage;
  addingItem = false;
  itemForm?: FormGroup;
  modalRef?: BsModalRef;

  @Input() workItemId?: number;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private modalService: BsModalService) {}

  onSaveWorkItem() {}

  initForm() {
    this.itemForm = this.fb.group({
      description: ['', Validators.required],
      workItemId: [this.workItemId, Validators.required],
      files: [new Array()]
    })
  }

  setAddingItem(state: boolean) {
    state && this.initForm();    
    this.addingItem = state;
  }

  onSubmit() {
    const files = this.itemForm!.controls["files"].value;
    const data = new FormData();    
    const headers = new HttpHeaders({
      "Content-Type": "multipart/form-data"
    });

    data.append('workItemId', this.workItemId!.toString());
    data.append('description', this.itemForm!.controls["description"].value);

    files.map((file: File) => {
      data.append('recievedFiles', file);
    });

    this.httpService.postWithOptions(`${ApiConstants.workItemActivityLogApi}`, data, headers)
      .subscribe();
  }

  onAddImage() {
    const initialState: ModalOptions<UploadFilesModalComponent> = {
      initialState: {
        files: this.itemForm!.controls["files"].value
      }
    };

    this.modalRef = this.modalService.show(UploadFilesModalComponent, initialState);

    if (this.modalRef!.onHide) {
      this.modalRef.onHidden.subscribe((files: File[]) => {
        if(!files || !files.length) return;

        this.itemForm!.patchValue({files});
      });
    }
  }
}
