import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-upload-files-modal',
  templateUrl: './upload-files-modal.component.html',
  styleUrls: ['./upload-files-modal.component.scss']
})
export class UploadFilesModalComponent {
  @Input() files: File[] = [];

  constructor (public activeModal: NgbActiveModal) {}

  onSelect(event: any) {
    this.files!.push(...event.addedFiles);
  }

  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
