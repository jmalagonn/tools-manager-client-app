import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/app/Core/models/Tool.model';
import { HttpService } from 'src/app/services/http.service';
import { AddToolModalComponent } from '../../components/add-tool-modal/add-tool-modal.component';
import { ToolOutput } from 'src/app/Core/models/Tool-output.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ApiConstants, RouteConstants } from 'src/app/Core/constants/app-constants';
import { AddToolsOutputModalComponent } from '../../components/add-tools-output-modal/add-tools-output-modal.component';

@Component({
  selector: 'app-tools-management',
  templateUrl: './tools-management.component.html',
  styleUrls: ['./tools-management.component.scss']
})
export class ToolsManagementComponent implements OnInit {
  modalRef?: NgbModalRef;
  tools?: Tool[];
  toolOutputs?: ToolOutput[];
  routeConstants = RouteConstants;

  constructor(
    private modalService: NgbModal,
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.getToolsList();
    this.getToolOutputs();
  }

  onOpenAddToolModal() {
    this.modalRef = this.modalService.open(AddToolModalComponent);
    this.modalRef.closed.subscribe(response => {
      response && this.getToolsList();
    });    
  }

  getToolsList(): void {
    this.httpService.get<Tool[]>('Tools')
      .subscribe(response => this.tools = response);
  }

  getToolOutputs(): void {
    this.httpService.get<ToolOutput[]>(ApiConstants.toolOutputsApi)
      .subscribe(response => this.toolOutputs = response);
  }

  openAddToolOutputModal(): void {
    this.modalRef = this.modalService.open(
      AddToolsOutputModalComponent, 
      { size: 'lg',  scrollable: true });
    this.modalRef.closed.subscribe(() => this.getToolOutputs());
  }
}
