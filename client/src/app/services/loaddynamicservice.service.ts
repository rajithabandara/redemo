import {
  Injectable,
  ComponentFactoryResolver,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaddynamicserviceService {
  private isLoggedIn = new BehaviorSubject(true);
  isLoggedIn$ = this.isLoggedIn.asObservable();
  constructor(private cfr: ComponentFactoryResolver) {}

  login() {
    this.isLoggedIn.next(true);
  }

  logout() {
    this.isLoggedIn.next(false);
  }
  async loadComponent(vcr: ViewContainerRef, isLoggedIn: boolean) {
    const { Dynamiccomp1Component } = await import(
      '../components/report-engine/dynamiccomp1/dynamiccomp1.component'
    );

    const { Dynamiccomp2Component } = await import(
      '../components/report-engine/dynamiccomp2/dynamiccomp2.component'
    );

    vcr.clear();

    console.log(isLoggedIn);

    let component: any = isLoggedIn
      ? Dynamiccomp1Component
      : Dynamiccomp2Component;

    return vcr.createComponent(this.cfr.resolveComponentFactory(component));
  }
}
