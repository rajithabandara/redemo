import { Injectable } from '@angular/core';
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
  constructor() {}

  private centerTranslationData = new BehaviorSubject(
    JSON.stringify(this.translationData)
  );

  private zoomViewBoxAtttributeData = new BehaviorSubject(
    JSON.stringify(this.zoomViewBoxData)
  );

  sharedMessage = this.centerTranslationData.asObservable();

  zoomSharedMessage = this.zoomViewBoxAtttributeData.asObservable();

  emmitTranslationString(centerTranslationData: string) {
    this.centerTranslationData.next(centerTranslationData);
  }

  emmitZoomViewBoxString(zoomViewBoxData: string) {
    this.zoomViewBoxAtttributeData.next(zoomViewBoxData);
  }
}
