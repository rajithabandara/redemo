import { Component, ElementRef, OnInit } from '@angular/core';
import { SharedService } from '../../services/sharedData.service';

@Component({
  selector: 'app-report-engine',
  templateUrl: './report-engine.component.html',
  styleUrls: ['./report-engine.component.css'],
})
export class ReportEngineComponent implements OnInit {
  param: any;
  translateAttribute = ``;
  viewableAreaWidth: number = 1500;
  viewableAreaHeight: number = 1500;
  toggle: boolean = false;
  viewBoxAttribute = `0 0 1500 1500`;
  zoomedViewableAreaWidth = 1500;
  zoomedViewableAreaHeight = 1500;
  zoomPercentage = 1;

  constructor(
    private hostElement: ElementRef,
    private sharedService: SharedService
  ) {
    this.toggle = false;
  }
  ngOnInit(): void {
    this.center();
  }

  center() {
    let reportArea: any = this.hostElement.nativeElement.querySelector(
      '#reportArea'
    );

    this.translateAttribute = this.getCenterTranslation(
      reportArea.getBBox(),
      this.zoomedViewableAreaWidth,
      this.zoomedViewableAreaHeight
    );

    let translationData = {
      translateAttribute: this.translateAttribute,
      viewableAreaHeight: this.zoomedViewableAreaHeight,
      viewableAreaWidth: this.zoomedViewableAreaWidth,
      viewBoxAttribute: this.viewBoxAttribute,
    };

    let translationDataStr = JSON.stringify(translationData);

    this.sharedService.emmitTranslationString(translationDataStr);
  }

  zoomOut() {
    let reportArea: any = this.hostElement.nativeElement.querySelector(
      '#reportArea'
    );

    this.zoomPercentage = this.zoomPercentage + 0.25;
    console.log(this.zoomPercentage);

    if (this.zoomPercentage < 2) {
      let zoomedViewableAreaWidth =
        this.viewableAreaWidth * this.zoomPercentage;

      let zoomedViewableAreaHeight =
        this.viewableAreaHeight * this.zoomPercentage;

      this.zoomedViewableAreaWidth = zoomedViewableAreaWidth;

      this.zoomedViewableAreaHeight = zoomedViewableAreaHeight;

      this.viewBoxAttribute = `0 0 ${zoomedViewableAreaWidth} ${zoomedViewableAreaHeight}`;

      this.translateAttribute = this.getCenterTranslation(
        reportArea.getBBox(),
        zoomedViewableAreaWidth,
        zoomedViewableAreaHeight
      );

      let zoomTranslationData = {
        viewableAreaHeight: zoomedViewableAreaHeight,
        viewableAreaWidth: zoomedViewableAreaWidth,
        viewBoxAttribute: this.viewBoxAttribute,
        translateAttribute: this.translateAttribute,
      };

      this.sharedService.emmitZoomViewBoxString(
        JSON.stringify(zoomTranslationData)
      );
    } else {
      this.zoomPercentage = 2;
      console.log('zoom ut limit exeed');
    }
  }

  zoomIn() {
    let reportArea: any = this.hostElement.nativeElement.querySelector(
      '#reportArea'
    );

    this.zoomPercentage = this.zoomPercentage - 0.25;
    console.log(this.zoomPercentage);
    if (this.zoomPercentage >= 0.5) {
      let zoomedViewableAreaWidth =
        this.viewableAreaWidth * this.zoomPercentage;

      let zoomedViewableAreaHeight =
        this.viewableAreaHeight * this.zoomPercentage;

      this.viewBoxAttribute = `0 0 ${zoomedViewableAreaWidth} ${zoomedViewableAreaHeight}`;

      this.translateAttribute = this.getCenterTranslation(
        reportArea.getBBox(),
        zoomedViewableAreaWidth,
        zoomedViewableAreaHeight
      );

      let zoomTranslationData = {
        viewableAreaHeight: zoomedViewableAreaHeight,
        viewableAreaWidth: zoomedViewableAreaWidth,
        viewBoxAttribute: this.viewBoxAttribute,
        translateAttribute: this.translateAttribute,
      };
      this.sharedService.emmitZoomViewBoxString(
        JSON.stringify(zoomTranslationData)
      );
    } else {
      this.zoomPercentage = 0.5;
      console.log('zoom in limit exeed');
    }
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

    reportBoundryBox = reportBoundryBox;

    let reportCenterX = reportBoundryBox.width / 2 + reportBoundryBox.x;
    let reportCenterY = reportBoundryBox.height / 2 + reportBoundryBox.y;

    let differanceX = viewableAreaWidth / 2 - reportCenterX;
    let differanceY = viewableAreaHeight / 2 - reportCenterY;

    return `translate (${differanceX},${differanceY})`;
  }

  getCenterTranslationValues(
    reportBoundryBox: any,
    viewableAreaWidth: number,
    viewableAreaHeight: number
  ): any {
    console.log(reportBoundryBox);

    reportBoundryBox = reportBoundryBox;

    let reportCenterX = reportBoundryBox.width / 2 + reportBoundryBox.x;
    let reportCenterY = reportBoundryBox.height / 2 + reportBoundryBox.y;

    let differanceX = viewableAreaWidth / 2 - reportCenterX;
    let differanceY = viewableAreaHeight / 2 - reportCenterY;

    return { differanceX, differanceY };
  }
}
