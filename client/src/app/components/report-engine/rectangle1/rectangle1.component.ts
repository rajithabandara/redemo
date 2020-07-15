import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../../services/sharedData.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-rectangle1',
  templateUrl: './rectangle1.component.html',
  styleUrls: ['./rectangle1.component.css'],
})
export class Rectangle1Component implements OnInit, OnDestroy {
  //Varable Declaration
  translateAttribute = ``;
  viewableAreaWidth = 500;
  viewableAreaHeight = 500;
  viewBoxAttribute = `0 0 1500 1500`;
  dynamicCSSUrl: any;
  sharedServiceObservableZoom: any;

  public _cssUrl: string;
  private _sharedServiceObservable: any;
  private _themePublishedSub: any;

  constructor(
    private _sharedService: SharedService,
    private sanitizer: DomSanitizer
  ) {}

  sharedServiceObservableResize: any;
  sharedServiceObservablePan: any;

  ngOnDestroy(): void {
    console.log('unsubscribed');

    if (this._sharedServiceObservable) {
      this._sharedServiceObservable.unsubscribe();
    }

    if (this.sharedServiceObservableZoom) {
      this.sharedServiceObservableZoom.unsubscribe();
    }

    if (this._themePublishedSub) {
      this._themePublishedSub.unsubscribe();
    }
  }
  ngOnInit(): void {
    this._sharedService.contentReset.emit();
    this._sharedServiceObservable = this._sharedService.contentCentered.subscribe(
      (translationDataStr) => {
        console.log(translationDataStr);

        let translationData = JSON.parse(translationDataStr);
        this.viewableAreaWidth = translationData.viewableAreaWidth;
        this.viewableAreaHeight = translationData.viewableAreaHeight;
        this.translateAttribute = translationData.translateAttribute;
        this.viewBoxAttribute = translationData.viewBoxAttribute;
      }
    );

    this.sharedServiceObservableZoom = this._sharedService.contentZoomed.subscribe(
      (zoomdata) => {
        console.log(zoomdata);

        let zoomdataObj = JSON.parse(zoomdata);

        this.translateAttribute = zoomdataObj.translateAttribute;
        this.viewBoxAttribute = zoomdataObj.viewBoxAttribute;
        this.viewableAreaWidth = zoomdataObj.viewableAreaWidth;
        this.viewableAreaHeight = zoomdataObj.viewableAreaHeight;
      }
    );

    this.sharedServiceObservableResize = this._sharedService.resizeSharedMessage.subscribe(
      (resizeData) => {
        console.log(resizeData);

        let resizeDataObj = JSON.parse(resizeData);

        // this.translateAttribute = resizeDataObj.translateAttribute;
        this.viewBoxAttribute = resizeDataObj.viewBoxAttribute;
        this.viewableAreaWidth = resizeDataObj.viewableAreaWidth;
        this.viewableAreaHeight = resizeDataObj.viewableAreaHeight;
      }
    );

    this.sharedServiceObservablePan = this._sharedService.contentPaning.subscribe(
      (panData) => {
        console.log(panData);

        let panDataObj = JSON.parse(panData);

        // this.translateAttribute = resizeDataObj.translateAttribute;
        this.viewBoxAttribute = panDataObj.viewBoxAttribute; //panDataObj.viewBoxAttribute;
        // this.viewableAreaWidth = panDataObj.viewableAreaWidth;
        // this.viewableAreaHeight = panDataObj.viewableAreaHeight;
      }
    );

    this._sharedService.contentRefresh.emit();
  }
}
