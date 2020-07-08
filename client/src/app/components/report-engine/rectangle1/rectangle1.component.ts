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
  viewableAreaWidth = 0;
  viewableAreaHeight = 0;

  dynamicCSSUrl: any;
  public _cssUrl: string;
  private _sharedServiceObservable: any;
  private _themePublishedSub: any;

  constructor(private _sharedService: SharedService,
              private sanitizer: DomSanitizer) { }

  ngOnDestroy(): void {
    console.log('unsubscribe');
    this._sharedServiceObservable.unsubscribe();

    if (this._themePublishedSub) {
      this._themePublishedSub.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.registerEvent();
    this._sharedServiceObservable = this._sharedService.sharedMessage.subscribe(
      (translationDataStr) => {
        console.log(translationDataStr);

        let translationData = JSON.parse(translationDataStr);

        this.translateAttribute = translationData.translateAttribute;
        this.viewableAreaWidth = translationData.viewableAreaWidth;
        this.viewableAreaHeight = translationData.viewableAreaHeight;
      }
    );

    //Default theme load
    this.loadStyle(3);
  }

  private registerEvent() {
    this._themePublishedSub = this._sharedService.themePublished.subscribe((themeId: number) => {
      this.loadStyle(themeId);
    });
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
    this.dynamicCSSUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this._cssUrl);
  }
}
