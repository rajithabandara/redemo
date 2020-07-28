import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { DynamicviewrefDirective } from 'src/app/directives/dynamicviewref.directive';
import { Dynamiccomp1Component } from '../dynamiccomp1/dynamiccomp1.component';
import { Dynamiccomp2Component } from '../dynamiccomp2/dynamiccomp2.component';
import { AdComponent } from '../../ad.AdComponent';
import { Rectangle1Component } from '../rectangle1/rectangle1.component';

@Component({
  selector: 'app-dynamicloader',
  templateUrl: './dynamicloader.component.html',
  styleUrls: ['./dynamicloader.component.css'],
})
export class DynamicloaderComponent implements OnInit, AfterViewInit {
  // @ViewChild('container', { read: ViewContainerRef })
  // viewContainerRef: ViewContainerRef;

  @ViewChild(DynamicviewrefDirective, { static: true })
  dynamicDirective: DynamicviewrefDirective;
  translateAttribute: string;
  viewableAreaHeight: any;
  viewableAreaWidth: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private hostElement: ElementRef
  ) {}

  title = 'saadfkhjaslfjknshfb';
  ref;
  adItem;
  ngOnInit(): void {
    this.adItem = { data: { name: this.title + 'askejflekjsjksldjkfj' } };

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
      // this.title = Math.random().toString();
      // console.log(this.title);
      this.adItem = { data: { name: this.title + 'askejflekjsjksldjkfj' } };

      // if (this.ref) {
      //   (<AdComponent>this.ref.instance).data = this.adItem.data;
      // }
    }, 200);
  }
  ngAfterViewInit(): void {
    console.log('afterviewinit');

    let svgViewableArea: any = this.hostElement.nativeElement.querySelector(
      '#svgViewableArea'
    );

    let reportArea: any = this.hostElement.nativeElement.querySelector(
      '#reportArea'
    );

    console.log(svgViewableArea);
    console.log(reportArea);
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
    // this.ref.changeDetectorRef.detectChanges();
  }

  addEditor2() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      Rectangle1Component
    );
    const viewContainerRef = this.dynamicDirective.vcr;

    console.log(viewContainerRef);

    viewContainerRef.clear();

    this.ref = viewContainerRef.createComponent(factory);

    (<AdComponent>this.ref.instance).data = this.adItem.data;

    // this.ref = this.viewContainerRef.createComponent(factory);
    // (<DynamicloaderComponent>componentRef.instance).data = adItem.data;
    // ref.instance.title = this.title;
    // this.ref.changeDetectorRef.detectChanges();
  }

  refresh() {
    this.adItem = {
      data: { name: this.title + '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@' },
    };
    (<AdComponent>this.ref.instance).data = this.adItem.data;
  }

  center() {
    let svgViewableArea: any = this.hostElement.nativeElement.querySelector(
      '#svgViewableArea'
    );

    let reportArea: any = this.hostElement.nativeElement.querySelector(
      '#reportArea'
    );

    console.log(svgViewableArea);

    let {
      viewableAreaHeight,
      viewableAreaWidth,
    } = this.getViewableAreaDimesion(svgViewableArea);

    this.viewableAreaHeight = viewableAreaHeight;
    this.viewableAreaWidth = viewableAreaWidth;

    this.translateAttribute = this.getCenterTranslation(
      reportArea.getBBox(),
      this.viewableAreaWidth,
      this.viewableAreaHeight
    );

    console.log(this.translateAttribute);

    let translationData = {
      translateAttribute: this.translateAttribute,
      viewableAreaHeight: this.viewableAreaHeight,
      viewableAreaWidth: this.viewableAreaWidth,
    };

    let translationDataStr = JSON.stringify(translationData);

    console.log(translationData);

    this.adItem = {
      data: {
        name: this.title + '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',
        translateAttribute: this.translateAttribute,
        viewableAreaHeight: this.viewableAreaHeight,
        viewableAreaWidth: this.viewableAreaWidth,
      },
    };
    (<AdComponent>this.ref.instance).data = this.adItem.data;

    // this.sharedService.emmitTranslationString(translationDataStr);
  }

  getViewableAreaDimesion(svgViewableArea: any) {
    let boundryBox = svgViewableArea.getBoundingClientRect();

    let viewableAreaHeight = boundryBox.height;
    let viewableAreaWidth = boundryBox.width;
    return { viewableAreaHeight, viewableAreaWidth };
  }

  getCenterTranslation(
    reportBoundryBox: any,
    viewableAreaWidth: number,
    viewableAreaHeight: number
  ): string {
    console.log(reportBoundryBox);

    reportBoundryBox = reportBoundryBox;

    let reportCenterX = reportBoundryBox.width / 2 + reportBoundryBox.x;
    let reportCenterY = reportBoundryBox.height / 2 + reportBoundryBox.y;

    let differanceX = viewableAreaWidth / 2 - reportCenterX;
    let differanceY = viewableAreaHeight / 2 - reportCenterY;

    return `translate (${differanceX},${differanceY})`;
  }
}
