import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToolOutput } from 'src/app/Core/models/Tool-output.model';
import { HttpService } from 'src/app/services/http.service';
import { RegisterOutputModalComponent } from '../../components/register-output-modal/register-output-modal.component';

@Component({
  selector: 'app-tool-output',
  templateUrl: './tool-output.component.html',
  styleUrls: ['./tool-output.component.scss']
})
export class ToolOutputComponent implements OnInit {
  modalRef?: BsModalRef;
  toolOutputsRegisters?: ToolOutput[];
  openToolOutputs?: ToolOutput[];
  closedToolOutputs?: ToolOutput[];

  constructor(
    private modalService: BsModalService,
    private httpService: HttpService) { }

  ngOnInit(): void {
    this.getOutputToolsRegisters();
  }

  onOpenAddToolModal() {
    this.modalRef = this.modalService.show(RegisterOutputModalComponent);
  }

  getOutputToolsRegisters(): void {
    this.httpService.get<ToolOutput[]>('OutputTools').subscribe(response => {
      this.toolOutputsRegisters = response
      this.openToolOutputs = this.toolOutputsRegisters.filter(toolOutput => toolOutput.toolOutputState.outputToolStateName == "Open");
      this.closedToolOutputs = this.toolOutputsRegisters.filter(toolOutput => toolOutput.toolOutputState.outputToolStateName != "Open");
    });
  }
}
