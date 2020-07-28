import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { SharedService } from '../../../services/sharedData.service';
import { AdComponent } from '../../ad.AdComponent';

@Component({
  selector: 'app-rectangle1',
  templateUrl: './rectangle1.component.html',
  styleUrls: ['./rectangle1.component.css'],
})
export class Rectangle1Component
  implements OnInit, OnDestroy, AfterViewInit, AdComponent {
  translateAttribute = ``;
  viewableAreaWidth = 0;
  viewableAreaHeight = 0;

  sharedServiceObservable: any;

  constructor(
    private sharedService: SharedService,
    private hostElement: ElementRef
  ) {}
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
    console.log(reportArea.getBBox());
    // reportArea.getBBox(),
  }
  data: any;
  ngOnDestroy(): void {
    console.log('unsubscribe');
    // this.sharedServiceObservable.unsubscribe();
  }
  ngOnInit(): void {
    // this.sharedServiceObservable = this.sharedService.sharedMessage.subscribe(
    //   (translationDataStr) => {
    //     console.log(translationDataStr);
    //     let translationData = JSON.parse(translationDataStr);
    //     this.translateAttribute = translationData.translateAttribute;
    //     this.viewableAreaWidth = translationData.viewableAreaWidth;
    //     this.viewableAreaHeight = translationData.viewableAreaHeight;
    //   }
    // );
  }
}
