import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppFile } from 'src/app/Core/models/AppFile.model';

@Component({
  selector: 'app-image-thumbnail',
  templateUrl: './image-thumbnail.component.html',
  styleUrls: ['./image-thumbnail.component.scss']
})
export class ImageThumbnailComponent implements OnChanges {
  imgSrc?: any;

  @Input() compImage?: File;
  @Input() appFile?: AppFile;

  constructor(private sanitizer: DomSanitizer) {}
  
  ngOnChanges(): void {
    this.generateImageThumbnail();
  }

  generateImageThumbnail(): void {
    if (!this.compImage && !this.appFile) return;

    this.imgSrc = !this.appFile 
     ? this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.compImage!))
     : this.appFile.url;
  }
}
