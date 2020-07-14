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

  constructor(
    private _sharedService: SharedService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnDestroy(): void {
    console.log('unsubscribe');
    this._sharedServiceObservable.unsubscribe();
    this._themePublishedSub.unsubscribe();
    this.sharedServiceObservableZoom.unsubscribe();
    this._sharedService.contentReset.emit();
  }
  ngOnInit(): void {
    this.registerEvent();
    //Default theme load
    this.loadStyle(3);
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
