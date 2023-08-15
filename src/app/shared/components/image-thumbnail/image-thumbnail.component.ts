import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppFile } from 'src/app/Core/models/AppFile.model';
import { ModalImageComponent } from '../modal-image/modal-image.component';

@Component({
  selector: 'app-image-thumbnail',
  templateUrl: './image-thumbnail.component.html',
  styleUrls: ['./image-thumbnail.component.scss']
})
export class ImageThumbnailComponent implements OnChanges {
  imgSrc?: any;

  @Input() compImage?: File;
  @Input() appFile?: AppFile;

  constructor(
    private sanitizer: DomSanitizer,
    private modalService: NgbModal) {}
  
  ngOnChanges(): void {
    this.generateImageThumbnail();
  }

  generateImageThumbnail(): void {
    if (!this.compImage && !this.appFile) return;

    this.imgSrc = !this.appFile 
     ? this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.compImage!))
     : this.appFile.url;
  }

  onImageClicked() {
    const modalRef = this.modalService.open(ModalImageComponent, { centered: true });
    modalRef.componentInstance.fileUrl = this.imgSrc;
  }
}
