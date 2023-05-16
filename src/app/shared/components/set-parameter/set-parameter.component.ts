import { Component } from '@angular/core';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-set-parameter',
  templateUrl: './set-parameter.component.html',
  styleUrls: ['./set-parameter.component.scss']
})
export class SetParameterComponent {
  faCheck = faCheck;
  faX = faX;
}
