import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appDynamicviewref]',
})
export class DynamicviewrefDirective {
  @Input() title: string;

  constructor(public vcr: ViewContainerRef) {}
}
