import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {
  translationData = {
    translateAttribute: '',
    viewableAreaHeight: 0,
    viewableAreaWidth: 0,
  };

  zoomViewBoxData = {
    viewBoxAttribute: `0 0 1500 1500`,
    viewableAreaHeight: 0,
    viewableAreaWidth: 0,
  };
  
  contentZoomed = new EventEmitter<string>();
  contentReset = new EventEmitter<boolean>();
  contentCentered = new EventEmitter<string>();

  constructor() { }

  private centerTranslationData = new BehaviorSubject(
    JSON.stringify(this.translationData)
  );

  private zoomViewBoxAtttributeData = new BehaviorSubject(
    JSON.stringify(this.zoomViewBoxData)
  );

  sharedMessage = this.centerTranslationData.asObservable();
  themePublished = new EventEmitter<number>();

  zoomSharedMessage = this.zoomViewBoxAtttributeData.asObservable();

  emmitTranslationString(centerTranslationData: string) {
    this.centerTranslationData.next(centerTranslationData);
  }

  emmitZoomViewBoxString(zoomViewBoxData: string) {
    this.zoomViewBoxAtttributeData.next(zoomViewBoxData);
  }

  reset() {
    this.translationData = {
      translateAttribute: '',
      viewableAreaHeight: 0,
      viewableAreaWidth: 0,
    };

    let translationCenterDataStr = JSON.stringify(this.translationData);
    this.emmitTranslationString(translationCenterDataStr)

    this.zoomViewBoxData = {
      viewBoxAttribute: `0 0 1500 1500`,
      viewableAreaHeight: 0,
      viewableAreaWidth: 0,
    };

    let translationZoomDataStr = JSON.stringify(this.zoomViewBoxData);
    //this.emmitZoomViewBoxString(translationZoomDataStr)
    this.contentZoomed.emit(translationZoomDataStr);
  }
}
