import { Component, ElementRef, OnInit } from '@angular/core';
import { SharedService } from '../../services/sharedData.service';

@Component({
  selector: 'app-report-engine',
  templateUrl: './report-engine.component.html',
  styleUrls: ['./report-engine.component.css'],
})
export class ReportEngineComponent {
  param: any;
  translateAttribute = ``;
  viewableAreaWidth: number = 0;
  viewableAreaHeight: number = 0;
  toggle: boolean = false;

  constructor(
    private hostElement: ElementRef,
    private sharedService: SharedService
  ) {
    this.toggle = false;
  }

  center() {

    let svgViewableArea: any = this.hostElement.nativeElement.querySelector(
      '#svgViewableArea'
    );

    let reportArea: any = this.hostElement.nativeElement.querySelector(
      '#reportArea'
    );

    let {
      viewableAreaHeight,
      viewableAreaWidth,
    } = this.getViewableAreaDimesion(svgViewableArea);

    this.viewableAreaHeight = viewableAreaHeight;
    this.viewableAreaWidth = viewableAreaWidth;

    this.translateAttribute = this.getCenterTranslation(
      reportArea,
      this.viewableAreaWidth,
      this.viewableAreaHeight
    );

    let translationData = {
      translateAttribute: this.translateAttribute,
      viewableAreaHeight: this.viewableAreaHeight,
      viewableAreaWidth: this.viewableAreaWidth,
    };

    let translationDataStr = JSON.stringify(translationData);

    this.sharedService.emmitTranslationString(translationDataStr);

  }

  getViewableAreaDimesion(svgViewableArea: any) {
    let boundryBox = svgViewableArea.getBoundingClientRect();


   


    let viewableAreaHeight = boundryBox.height;
    let viewableAreaWidth = boundryBox.width;
    return { viewableAreaHeight, viewableAreaWidth };
  }

  getCenterTranslation(
    reportBoundryBox: any,
    viewableAreaWidth: number,
    viewableAreaHeight: number
  ): string {
    console.log(reportBoundryBox);

    reportBoundryBox = reportBoundryBox.getBbox();

    let reportCenterX = reportBoundryBox.width / 2 + reportBoundryBox.x;
    let reportCenterY = reportBoundryBox.height / 2 + reportBoundryBox.y;

    let differanceX = viewableAreaWidth / 2 - reportCenterX;
    let differanceY = viewableAreaHeight / 2 - reportCenterY;

    return `translate (${differanceX},${differanceY})`;




  }
}
