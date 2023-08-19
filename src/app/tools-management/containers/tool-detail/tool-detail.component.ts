import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { Tool } from 'src/app/Core/models/Tool.model';
import { UpdateTool } from 'src/app/Core/models/tool/Update-tool.model';
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

  onToolUpdated(updToDateTool: UpdateTool) {
    const formData = new FormData();

    formData.append("id", updToDateTool.id.toString());
    formData.append("name", updToDateTool.name);
    formData.append("toolParameters", JSON.stringify(updToDateTool.toolParameters));
    formData.append("deletedFileIds", updToDateTool.deletedFileIds.length ? updToDateTool.deletedFileIds.toString() : "[]");
    updToDateTool.addedFiles.map(file => formData.append("addedFiles", file));

    this.httpService.put<Tool>(ApiConstants.toolsApi, formData)
      .subscribe(response => {
        this.tool = response;
        this.updatingTool = false;
      });
  }
}
