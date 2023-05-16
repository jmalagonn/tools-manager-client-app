import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ListActions } from 'src/app/Core/enums/List-actions.enum';
import { ToolOutput } from 'src/app/Core/models/Tool-output.model';
import { ReturnToolsWithNews } from 'src/app/Core/models/Return-tool-with-news.model';
import { Tool } from 'src/app/Core/models/Tool.model';
import { HttpService } from 'src/app/services/http.service';
import { ReturnToolsComponent } from '../../components/return-tools/return-tools.component';

@Component({
  selector: 'app-tools-output-detail',
  templateUrl: './tools-output-detail.component.html',
  styleUrls: ['./tools-output-detail.component.scss']
})
export class ToolsOutputDetailComponent implements OnInit {
  modalRef?: BsModalRef;
  outputTool?: ToolOutput;
  lentTools?: Tool[];
  availableTools?: Tool[];
  listActions = [ListActions.info, ListActions.check, ListActions.warning];

  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.getOutputTool();
  };

  getOutputTool(): void {    
    const outputToolId = this.route.snapshot.paramMap.get('id');

    this.httpService.get<ToolOutput>(`OutputTools/${outputToolId}`)
      .subscribe(response => {        
        this.outputTool = response;
        this.lentTools = this.outputTool.tools.filter(tool => !tool.returnDateTime);
        this.availableTools = this.outputTool.tools.filter(tool => tool.returnDateTime);
      });
  }

  openReturnToolsModal() {
    this.modalRef = this.modalService.show(ReturnToolsComponent, {
      initialState: { 
        outputTool: this.outputTool!
      }
    });
  }

  returnToolsWithNoIssues() {
    this.httpService.post(`OutputTools/return-tools-with-no-issues/${this.outputTool!.toolOutputId}`, {})
      .subscribe();
  }

  returnToolWithIssues(tool: Tool) {
    const body: ReturnToolsWithNews = {
      outputToolId: this.outputTool!.toolOutputId,
      toolNewsDto: {
        toolId: tool.toolId
      }
    };

    this.httpService.post("OutputTools/return-tool-with-news", body)
      .subscribe(response => { 
        console.log(response);
      });
  }

  returnToolWithNoIssues(tool: Tool) {
    this.httpService.post(`OutputTools/return-tool-with-no-issues/${this.outputTool!.toolOutputId}/${tool.toolId}`, {})
      .subscribe(response => { 
        console.log(response);
      });
  }

  actionButtonClicked(actionEvent: any) {
    switch (actionEvent.action) {
      case ListActions.info:
        this.router.navigateByUrl(`/tools-management/${actionEvent.tool.toolId}`);
        break;
      case ListActions.check:
        this.returnToolWithNoIssues(actionEvent.tool);
        break;
    }
  }
}
