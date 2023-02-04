import { Component, Input } from '@angular/core';
import { faImage, faSave } from '@fortawesome/free-solid-svg-icons';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Tool } from 'src/app/Core/models/Tool.model';
import { ToastrService } from 'ngx-toastr';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

@Component({
  selector: 'app-qr-info',
  templateUrl: './qr-info.component.html',
  styleUrls: ['./qr-info.component.scss']
})
export class QrInfoComponent {
  qrCodeElementType = NgxQrcodeElementTypes.IMG;
  qrCodeErrorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;  
  faImage = faImage;
  faSave = faSave;

  @Input() tool!: Tool;

  constructor (private toastrService: ToastrService) {}

  async copyOrSaveQRInfo(copy = true) {
    const node = document.getElementById("tool-qr-info")!;
    const nodeTitle = <HTMLElement> node.firstChild!;

    nodeTitle.innerHTML = this.tool.toolName; 

    const blobImg = await htmlToImage.toBlob(node, {backgroundColor: "white"});    
    
    copy 
      ? navigator.clipboard.write([new ClipboardItem({'image/png': blobImg!})])
      : this.saveQrInfo(blobImg!);

    nodeTitle.innerHTML = "Código QR";
    this.toastrService.success("Imagen copiada al portapapeles");
  }

  saveQrInfo(blob: Blob) {
    var blobUrl = URL.createObjectURL(blob);

    var link = document.createElement("a"); // Or maybe get it from the current document
    
    link.href = blobUrl;
    link.download = `${this.tool.toolName}.png`;
    
    link.click();
    link.remove();
  }
}
