import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-thumbnail',
  templateUrl: './image-thumbnail.component.html',
  styleUrls: ['./image-thumbnail.component.scss']
})
export class ImageThumbnailComponent implements OnChanges {
  imgSrc?: any;

  @Input() compImage?: File;

  constructor(private sanitizer: DomSanitizer) {}
  
  ngOnChanges(): void {
    this.generateImageThumbnail();
  }

  generateImageThumbnail(): void {
    if (!this.compImage) return;

    this.imgSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.compImage!));
  }
}
