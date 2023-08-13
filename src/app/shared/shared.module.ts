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
import { NgbCarouselModule, NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalImageComponent } from './components/modal-image/modal-image.component';
import { ListActionIconPipe } from './pipes/list-action-icon.pipe';
import { DropdownInputComponent } from './components/dropdown-input/dropdown-input.component';
import { WorkStatePipe } from './pipes/work-state.pipe';
import { ContainsPipe } from './pipes/contains.pipe';
import { EditModelComponent } from './components/edit-model/edit-model.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { AddNewParameterComponent } from './components/add-new-parameter/add-new-parameter.component';
import { SetParameterComponent } from './components/set-parameter/set-parameter.component';
import { ImageThumbnailComponent } from './components/image-thumbnail/image-thumbnail.component';
import { AddParameterComponent } from './components/add-parameter/add-parameter.component';
import { AddImagesComponent } from './components/add-images/add-images.component';
import { WorkOrdersTableComponent } from './components/work-orders-table/work-orders-table.component';

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
    DropdownInputComponent,
    WorkStatePipe,
    ContainsPipe,
    EditModelComponent,
    SectionTitleComponent,
    AddNewParameterComponent,
    SetParameterComponent,
    ImageThumbnailComponent,
    AddParameterComponent,
    AddImagesComponent,
    WorkOrdersTableComponent,
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
    NgbDropdownModule,
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
    DropdownInputComponent,
    WorkStatePipe,
    ContainsPipe,
    EditModelComponent,
    SectionTitleComponent,
    AddNewParameterComponent,
    SetParameterComponent,
    ImageThumbnailComponent,
    NgxDropzoneModule,
    AddParameterComponent,
    AddImagesComponent,
    WorkOrdersTableComponent,
  ]
})
export class SharedModule { }
