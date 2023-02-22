import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AppFile } from 'src/app/Core/models/AppFile.model';
import { SliderConfig } from 'src/app/Core/models/slider-config.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnChanges {
  filesUrl = environment.filesUrl;

  @Input() images: AppFile[] = [];
  @Input() config?: SliderConfig;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
