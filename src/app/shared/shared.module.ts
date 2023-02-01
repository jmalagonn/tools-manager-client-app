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

@NgModule({
  declarations: [
    DropdownComponent,
    ToDropdownItemPipe,
    LastCharactersPipe,
    OutputToolStatePipe,
    ToolsListComponent,
    OutputToolListComponent,
    ListActionsFilterPipe,
    ItemsListComponent
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
  ]
})
export class SharedModule { }
