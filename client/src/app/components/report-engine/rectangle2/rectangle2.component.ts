import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SharedService } from '../../../services/sharedData.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-rectangle2',
  templateUrl: './rectangle2.component.html',
  styleUrls: ['./rectangle2.component.css'],
})
export class Rectangle2Component implements OnInit, OnDestroy {
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
  private _sharedServiceObservablePan: any;
  private _sharedServiceObservableResize: any;

  constructor(
    private _sharedService: SharedService,
    private sanitizer: DomSanitizer
  ) {
    this.loadStyle(3); // //Default theme load
  }

  ngOnDestroy(): void {
    console.log('unsubscribe');

    if (this._sharedServiceObservable) {
      this._sharedServiceObservable.unsubscribe();
    }

    if (this._themePublishedSub) {
      this._themePublishedSub.unsubscribe();
    }

    if (this.sharedServiceObservableZoom) {
      this.sharedServiceObservableZoom.unsubscribe();
    }
    if (this._sharedServiceObservableResize) {
      this._sharedServiceObservableResize.unsubscribe();
    }
    if (this._sharedServiceObservablePan) {
      this._sharedServiceObservablePan.unsubscribe();
    }
  }
  ngOnInit(): void {
    this._sharedService.contentReset.emit(true);
    this.registerEvent();
  }

  private registerEvent() {
    this._themePublishedSub = this._sharedService.themePublished.subscribe(
      (themeId: number) => {
        this.loadStyle(themeId);
      }
    );

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

    this._sharedServiceObservableResize = this._sharedService.resizeSharedMessage.subscribe(
      (resizeData) => {
        console.log(resizeData);

        let resizeDataObj = JSON.parse(resizeData);

        // this.translateAttribute = resizeDataObj.translateAttribute;
        this.viewBoxAttribute = resizeDataObj.viewBoxAttribute;
        this.viewableAreaWidth = resizeDataObj.viewableAreaWidth;
        this.viewableAreaHeight = resizeDataObj.viewableAreaHeight;
      }
    );

    this._sharedServiceObservablePan = this._sharedService.contentPaning.subscribe(
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

  private loadStyle(themeId: number) {
    if (themeId == 1) {
      this._cssUrl = '../assets/report1/reportred.css';
    } else if (themeId == 2) {
      this._cssUrl = '../assets/report1/reportblue.css';
    } else if (themeId == 3) {
      this._cssUrl = '../assets/report1/reportblack.css';
    }
    //Dynamic Url has to be safe with sanitizer
    this.dynamicCSSUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this._cssUrl
    );
  }
}
