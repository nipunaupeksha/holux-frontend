import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[appDoubleClickPrevention]',
})
export class DoubleClickPreventionDirective {
  @HostBinding('disabled') disabled = false
  constructor() {}

  @HostListener('click') mouseClick(eventData: Event) {
    this.disabled = true
  }
}
