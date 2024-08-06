import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHighlights]',
  standalone: true,
})
export class HighlightsDirective {
  constructor(public el: ElementRef) {}

  @HostBinding('style.backgroundColor')
  bgColor = 'green';

  @HostListener('mouseenter')
  changebgColor() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseleave')
  resetbgColor() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }
}
