import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {
  @Input() title?: string;
  @Input() editableSection?: boolean;

  @Output() editButtonClickedEvent = new EventEmitter<void>();
}
