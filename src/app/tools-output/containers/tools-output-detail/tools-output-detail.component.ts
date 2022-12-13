import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OutputTool } from 'src/app/Core/models/Output-tool.model';
import { HttpService } from 'src/app/services/http.service';
import { ReturnToolsComponent } from '../../components/return-tools/return-tools.component';

@Component({
  selector: 'app-tools-output-detail',
  templateUrl: './tools-output-detail.component.html',
  styleUrls: ['./tools-output-detail.component.scss']
})
export class ToolsOutputDetailComponent implements OnInit {
  modalRef?: BsModalRef;
  outputTool?: OutputTool;

  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.getOutputTool();
  };

  getOutputTool(): void {    
    const outputToolId = this.route.snapshot.paramMap.get('id');

    this.httpService.get<OutputTool>(`OutputTools/${outputToolId}`)
      .subscribe(response => this.outputTool = response);
  }

  openReturnToolsModal() {
    this.modalRef = this.modalService.show(ReturnToolsComponent, {
      initialState: { 
        outputTool: this.outputTool!
      }
    });
  }

  returnToolsWithNoIssues() {
    this.httpService.post(`OutputTools/return-tools-with-no-issues/${this.outputTool!.outputToolId}`, {})
      .subscribe();
  }
}
