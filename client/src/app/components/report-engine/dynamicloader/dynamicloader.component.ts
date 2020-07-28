import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { DynamicviewrefDirective } from 'src/app/directives/dynamicviewref.directive';
import { Subject } from 'rxjs';
import { Dynamiccomp1Component } from '../dynamiccomp1/dynamiccomp1.component';
import { Dynamiccomp2Component } from '../dynamiccomp2/dynamiccomp2.component';
@Component({
  selector: 'app-dynamicloader',
  templateUrl: './dynamicloader.component.html',
  styleUrls: ['./dynamicloader.component.css'],
})
export class DynamicloaderComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  viewContainerRef: ViewContainerRef;
  dynamicDirective: DynamicviewrefDirective;
  private destroySubject = new Subject();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  title = 'blabalabablabab';

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
  }

  addEditor1() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      Dynamiccomp1Component
    );
    this.viewContainerRef.remove();
    const ref = this.viewContainerRef.createComponent(factory);

    ref.changeDetectorRef.detectChanges();
  }

  addEditor2() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      Dynamiccomp2Component
    );
    this.viewContainerRef.remove();
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
}
