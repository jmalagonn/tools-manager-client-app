import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Tool } from 'src/app/Core/models/Tool.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-tool-detail',
  templateUrl: './tool-detail.component.html',
  styleUrls: ['./tool-detail.component.scss']
})
export class ToolDetailComponent {
  qrCodeElementType = NgxQrcodeElementTypes.IMG;
  qrCodeErrorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  tool?: Tool;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.getTool();
  };

  getTool(): void {    
    const toolId = this.route.snapshot.paramMap.get('id');

    this.httpService.get<Tool>(`Tools/${toolId}`)
      .subscribe(response => this.tool = response);
  }
}
