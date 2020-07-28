import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicviewref]',
})
export class DynamicviewrefDirective {
  constructor(public vcr: ViewContainerRef) {}
}
