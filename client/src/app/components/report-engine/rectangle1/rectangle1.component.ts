import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../../services/sharedData.service';

@Component({
  selector: 'app-rectangle1',
  templateUrl: './rectangle1.component.html',
  styleUrls: ['./rectangle1.component.css'],
})
export class Rectangle1Component implements OnInit, OnDestroy {
  translateAttribute = ``;
  viewableAreaWidth = 1500;
  viewableAreaHeight = 1500;
  viewBoxAttribute = `0 0 1500 1500`;
  sharedServiceObservable: any;
  sharedServiceObservableZoom: any;
  sharedServiceObservableResize: any;
  sharedServiceObservablePan: any;

  constructor(private sharedService: SharedService) {}
  ngOnDestroy(): void {
    console.log('unsubscribed');
    this.sharedServiceObservable.unsubscribe();
  }
  ngOnInit(): void {
    this.sharedServiceObservable = this.sharedService.sharedMessage.subscribe(
      (translationDataStr) => {
        console.log(translationDataStr);

        let translationData = JSON.parse(translationDataStr);
        this.viewableAreaWidth = translationData.viewableAreaWidth;
        this.viewableAreaHeight = translationData.viewableAreaHeight;
        this.translateAttribute = translationData.translateAttribute;
        this.viewBoxAttribute = translationData.viewBoxAttribute;
      }
    );

    this.sharedServiceObservableZoom = this.sharedService.zoomSharedMessage.subscribe(
      (zoomdata) => {
        console.log(zoomdata);

        let zoomdataObj = JSON.parse(zoomdata);

        this.translateAttribute = zoomdataObj.translateAttribute;
        this.viewBoxAttribute = zoomdataObj.viewBoxAttribute;
        this.viewableAreaWidth = zoomdataObj.viewableAreaWidth;
        this.viewableAreaHeight = zoomdataObj.viewableAreaHeight;
      }
    );

    this.sharedServiceObservableResize = this.sharedService.resizeSharedMessage.subscribe(
      (resizeData) => {
        console.log(resizeData);

        let resizeDataObj = JSON.parse(resizeData);

        // this.translateAttribute = resizeDataObj.translateAttribute;
        this.viewBoxAttribute = resizeDataObj.viewBoxAttribute;
        this.viewableAreaWidth = resizeDataObj.viewableAreaWidth;
        this.viewableAreaHeight = resizeDataObj.viewableAreaHeight;
      }
    );

    this.sharedServiceObservablePan = this.sharedService.panSharedMessage.subscribe(
      (panData) => {
        console.log(panData);

        let panDataObj = JSON.parse(panData);

        // this.translateAttribute = resizeDataObj.translateAttribute;
        this.viewBoxAttribute = panDataObj.viewBoxAttribute; //panDataObj.viewBoxAttribute;
        // this.viewableAreaWidth = panDataObj.viewableAreaWidth;
        // this.viewableAreaHeight = panDataObj.viewableAreaHeight;
      }
    );
  }
}
