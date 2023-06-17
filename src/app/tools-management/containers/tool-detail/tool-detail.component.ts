import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { Tool } from 'src/app/Core/models/Tool.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-tool-detail',
  templateUrl: './tool-detail.component.html',
  styleUrls: ['./tool-detail.component.scss']
})
export class ToolDetailComponent {
  tool?: Tool;
  updatingTool: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.getTool();
  };

  getTool(): void {    
    const toolId = this.route.snapshot.paramMap.get('id');

    this.httpService.get<Tool>(`${ApiConstants.toolsApi}/${toolId}`)
      .subscribe(response => this.tool = response);
  }

  setUpdatingTool(value: boolean) {
    this.updatingTool = value;
  }

  onToolUpdated(tool: Tool) {
    this.httpService.put<Tool>(ApiConstants.toolsApi, tool)
      .subscribe(response => {
        this.tool = response;
        this.updatingTool = false;
      });
  }
}
