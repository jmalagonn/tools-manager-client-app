import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[leftPositionElement]'
})
export class LeftPositionElementDirective implements OnInit {
  leftClass = "left";

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();

    if (rect.x < 0) {
      this.el.nativeElement.classList.add(this.leftClass);
    }
  }
}
