import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ToDropdownItemPipe } from './pipes/to-dropdown-item.pipe';
import { LastCharactersPipe } from './pipes/last-characters.pipe';
import { OutputToolStatePipe } from './pipes/output-tool-state.pipe';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToolsListComponent } from './components/tools-list/tools-list.component';
import { RouterModule } from '@angular/router';
import { OutputToolListComponent } from './components/output-tool-list/output-tool-list.component';
import { ListActionsFilterPipe } from './pipes/list-actions-filter.pipe';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ToItemListPipe } from './pipes/to-item-list.pipe';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { UploadFilesModalComponent } from './components/upload-files-modal/upload-files-modal.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { AppFilesPipe } from './pipes/app-files.pipe';
import { NgbCarouselModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalImageComponent } from './components/modal-image/modal-image.component';
import { ListActionIconPipe } from './pipes/list-action-icon.pipe';

@NgModule({
  declarations: [
    DropdownComponent,
    ToDropdownItemPipe,
    LastCharactersPipe,
    OutputToolStatePipe,
    ToolsListComponent,
    OutputToolListComponent,
    ListActionsFilterPipe,
    ItemsListComponent,
    ToItemListPipe,
    UploadFilesModalComponent,
    ImageCarouselComponent,
    AppFilesPipe,
    ModalImageComponent,
    ListActionIconPipe,
  ],
  imports: [
    CommonModule,    
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgxQRCodeModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule,
    NgxDropzoneModule,
    CarouselModule.forRoot(),
    NgbCarouselModule,
    NgbModalModule,
  ],
  exports: [
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    NgxQRCodeModule,
    BsDropdownModule,
    DropdownComponent,
    ToDropdownItemPipe,
    LastCharactersPipe,
    OutputToolStatePipe,
    TooltipModule,
    ToolsListComponent,
    OutputToolListComponent,
    ListActionsFilterPipe,    
    ItemsListComponent,
    ToItemListPipe,
    UploadFilesModalComponent,
    CarouselModule,
    ImageCarouselComponent,
    AppFilesPipe,
    NgbCarouselModule,
    NgbModalModule,
    ModalImageComponent,
    ListActionIconPipe,
  ]
})
export class SharedModule { }
