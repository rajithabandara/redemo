import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {
  translationData = {
    translateAttribute: '',
    viewableAreaHeight: 0,
    viewableAreaWidth: 0,
  };
  private centerTranslationData = new BehaviorSubject(
    JSON.stringify(this.translationData)
  );
  sharedMessage = this.centerTranslationData.asObservable();
  themePublished = new EventEmitter<number>();

  constructor() {}

  emmitTranslationString(centerTranslationData: string) {
    this.centerTranslationData.next(centerTranslationData);
  }
}
