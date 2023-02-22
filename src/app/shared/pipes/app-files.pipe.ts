import { Pipe, PipeTransform } from '@angular/core';
import { AppFile } from 'src/app/Core/models/AppFile.model';

@Pipe({
  name: 'appFilesPipe'
})
export class AppFilesPipe implements PipeTransform {

  transform(appFile?: AppFile[]): AppFile[] {
    if(!appFile || !appFile.length) return []; 

    return appFile;
  }

}
