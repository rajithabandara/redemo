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

  resizeViewBoxData = {
    viewBoxAttribute: `0 0 1500 1500`,
    viewableAreaHeight: 0,
    viewableAreaWidth: 0,
  };

  panViewBoxData = {
    viewBoxAttribute: `0 0 1500 1500`,
    viewableAreaHeight: 0,
    viewableAreaWidth: 0,
  };

  contentZoomed = new EventEmitter<string>();
  contentReset = new EventEmitter<boolean>();
  contentCentered = new EventEmitter<string>();
  contentRefresh = new EventEmitter<boolean>();

  constructor() {}

  private centerTranslationData = new BehaviorSubject(
    JSON.stringify(this.translationData)
  );

  private zoomViewBoxAtttributeData = new BehaviorSubject(
    JSON.stringify(this.zoomViewBoxData)
  );

  private resizeViewBoxAtttributeData = new BehaviorSubject(
    JSON.stringify(this.resizeViewBoxData)
  );

  private panViewBoxAtttributeData = new BehaviorSubject(
    JSON.stringify(this.panViewBoxData)
  );

  sharedMessage = this.centerTranslationData.asObservable();
  themePublished = new EventEmitter<number>();

  zoomSharedMessage = this.zoomViewBoxAtttributeData.asObservable();

  resizeSharedMessage = this.resizeViewBoxAtttributeData.asObservable();

  panSharedMessage = this.panViewBoxAtttributeData.asObservable();

  emmitTranslationString(centerTranslationData: string) {
    this.centerTranslationData.next(centerTranslationData);
  }

  emmitZoomViewBoxString(zoomViewBoxData: string) {
    this.zoomViewBoxAtttributeData.next(zoomViewBoxData);
  }

  emmitResizeViewBoxString(resizeViewBoxData: string) {
    this.resizeViewBoxAtttributeData.next(resizeViewBoxData);
  }

  emmitPanViewBoxString(panViewBoxData: string) {
    this.panViewBoxAtttributeData.next(panViewBoxData);
  }
  reset() {
    this.translationData = {
      translateAttribute: '',
      viewableAreaHeight: 0,
      viewableAreaWidth: 0,
    };

    let translationCenterDataStr = JSON.stringify(this.translationData);
    this.emmitTranslationString(translationCenterDataStr);

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
