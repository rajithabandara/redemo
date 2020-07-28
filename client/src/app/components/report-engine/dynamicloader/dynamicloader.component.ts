import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
} from '@angular/core';
import { DynamicviewrefDirective } from 'src/app/directives/dynamicviewref.directive';
import { Dynamiccomp1Component } from '../dynamiccomp1/dynamiccomp1.component';
import { Dynamiccomp2Component } from '../dynamiccomp2/dynamiccomp2.component';
import { AdComponent } from '../../ad.AdComponent';

@Component({
  selector: 'app-dynamicloader',
  templateUrl: './dynamicloader.component.html',
  styleUrls: ['./dynamicloader.component.css'],
})
export class DynamicloaderComponent implements OnInit {
  // @ViewChild('container', { read: ViewContainerRef })
  // viewContainerRef: ViewContainerRef;

  @ViewChild(DynamicviewrefDirective, { static: true })
  dynamicDirective: DynamicviewrefDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  title = 'saadfkhjaslfjknshfb';
  ref;
  adItem;
  ngOnInit(): void {
    // const viewContainerRef = this.dynamicDirective.vcr;
    // this.loaddynamicservice.isLoggedIn$
    //   .pipe(
    //     takeUntil(this.destroySubject),
    //     mergeMap((isLoggedIn) =>
    //       this.loaddynamicservice.loadComponent(viewContainerRef, isLoggedIn)
    //     )
    //   )
    //   .subscribe();

    setInterval(() => {
      this.title = Math.random().toString();
      console.log(this.title);
      this.adItem = { data: { name: this.title + 'askejflekjsjksldjkfj' } };

      if (this.ref) {
        (<AdComponent>this.ref.instance).data = this.adItem.data;
      }
    }, 200);
  }

  addEditor1() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      Dynamiccomp1Component
    );
    const viewContainerRef = this.dynamicDirective.vcr;

    console.log(viewContainerRef);

    viewContainerRef.clear();

    this.ref = viewContainerRef.createComponent(factory);

    (<AdComponent>this.ref.instance).data = this.adItem.data;

    // this.ref = this.viewContainerRef.createComponent(factory);
    // (<DynamicloaderComponent>componentRef.instance).data = adItem.data;
    // ref.instance.title = this.title;
    this.ref.changeDetectorRef.detectChanges();
  }

  addEditor2() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      Dynamiccomp2Component
    );
    const viewContainerRef = this.dynamicDirective.vcr;

    console.log(viewContainerRef);

    viewContainerRef.clear();

    this.ref = viewContainerRef.createComponent(factory);

    (<AdComponent>this.ref.instance).data = this.adItem.data;

    // this.ref = this.viewContainerRef.createComponent(factory);
    // (<DynamicloaderComponent>componentRef.instance).data = adItem.data;
    // ref.instance.title = this.title;
    this.ref.changeDetectorRef.detectChanges();
  }

  refresh() {
    this.adItem = {
      data: { name: this.title + '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@' },
    };
    (<AdComponent>this.ref.instance).data = this.adItem.data;
  }
}
