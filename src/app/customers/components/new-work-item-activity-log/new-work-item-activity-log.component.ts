import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { faClose, faImage, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { HttpService } from 'src/app/services/http.service';
import { ModalImageComponent } from 'src/app/shared/components/modal-image/modal-image.component';
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
  faClose = faClose;
  addingItem = false;
  itemForm?: FormGroup<NewWorkItemActivityLogForm>;
  modalRef?: NgbModalRef;

  @Input() workItemId?: number;

  @Output() workItemActivityLogCreatedEvent = new EventEmitter<void>(); 

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private modalService: NgbModal,
    private sanitazer: DomSanitizer) {}

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
    const files: File[] = this.itemForm!.controls["files"].value!;
    const data = new FormData();

    data.append('workItemId', this.workItemId!.toString());
    data.append('description', this.itemForm!.controls["description"].value!);

    files.map((file: File) => {
      data.append('recievedFiles', file);
    });

    this.httpService.post(`${ApiConstants.workItemActivityLogApi}`, data)
      .subscribe(() => {
        this.workItemActivityLogCreatedEvent.emit();
        this.setAddingItem(false);
      });
  }

  onAddImage() {
    this.modalRef = this.modalService.open(UploadFilesModalComponent, { size: 'lg' });
    this.modalRef.componentInstance.files = this.itemForm!.controls["files"].value!;
    this.modalRef.closed.subscribe((files: File[]) => {
      if(!files || !files.length) return;

      this.itemForm!.patchValue({files});
    });
  }

  removeFile(file: File) {
    this.itemForm!.patchValue({
      files: this.itemForm!.value.files.filter((x: File) => x != file)
    });
  }

  showAddedImage(file: File) {
    this.modalRef = this.modalService.open(ModalImageComponent);
    this.modalRef.componentInstance.fileUrl = this.sanitazer
      .bypassSecurityTrustUrl(URL.createObjectURL(new Blob([file], { type: file.type })));
  }
}

interface NewWorkItemActivityLogForm {
  description: FormControl<string | null>,
  workItemId: FormControl<number | null | undefined>,
  files: FormControl<any>,
};
