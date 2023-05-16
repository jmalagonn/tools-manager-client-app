import { Component } from '@angular/core';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-new-parameter',
  templateUrl: './add-new-parameter.component.html',
  styleUrls: ['./add-new-parameter.component.scss']
})
export class AddNewParameterComponent {
  faCheck = faCheck;
  faX = faX;
}
