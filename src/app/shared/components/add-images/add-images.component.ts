import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { AppFile } from 'src/app/Core/models/AppFile.model';

@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styleUrls: ['./add-images.component.scss']
})
export class AddImagesComponent implements OnChanges { 
  private readonly appFilePrefix: string = "app-file";

  @Input() files?: File[] = [];
  @Input() appFiles?: AppFile[];

  @Output() removeFileEvent = new EventEmitter<AppFile>();
  @Output() addFilesEvent = new EventEmitter<File>();

  constructor() {}

  ngOnChanges(): void {
    if ((!this.files || !this.files.length) && this.appFiles) {
      this.getFiles();
    }
  }
  
  onSelectFile(event: any) {
    const tempFiles: File[] = this.files!;
    tempFiles.push(...event.addedFiles);

    this.addFilesEvent.emit(event.addedFiles);
    this.files = tempFiles;
  }

  onRemoveFile(file: File) {
    if (!this.files || !file) return;
      
    const tempFiles: File[] = this.files;
    const resFiles: File[] = tempFiles.filter(x => x.name != file.name);
    this.files = resFiles;

    if (this.appFiles && this.appFiles.length && file.name.match(/app-file/)?.length) {
      const fileId = file.name.substring(this.appFilePrefix.length + 1);
      const appFileDeleted = this.appFiles.find(x => x.appFileId == parseInt(fileId));

      this.removeFileEvent.emit(appFileDeleted);
    }
  }

  getFiles() {
    this.appFiles!.map(async (file) => {
      const res = await fetch(file.url!);
      const buf = await res.arrayBuffer();

      this.files?.push(new File([buf], this.appFilePrefix + '-' + file.appFileId!.toString()));
    });
  }
}
