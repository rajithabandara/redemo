import { Component, ElementRef } from '@angular/core';
import { SharedService } from '../../services/sharedData.service';

@Component({
  selector: 'app-report-engine',
  templateUrl: './report-engine.component.html',
  styleUrls: ['./report-engine.component.css'],
})
export class ReportEngineComponent {
  private _translateAttribute = ``;
  private _viewableAreaWidth: number = 1500;
  private _viewableAreaHeight: number = 1500;
  private _viewBoxAttribute = `0 0 1500 1500`;
  private _zoomedViewableAreaWidth = 1500;
  private _zoomedViewableAreaHeight = 1500;
  public zoomPercentage = 1;
  RoundedValue: number = Math.round(100/this.zoomPercentage);

  constructor(
    private hostElement: ElementRef,
    private sharedService: SharedService
  ) {}

  //Align all items on center
  center() {
    let reportArea: any = this.hostElement.nativeElement.querySelector(
      '#reportArea'
    );

    console.log(
      'centering - ' + this.zoomPercentage + ' % ' + this.zoomPercentage * 100
    );

    let zoomedViewableAreaWidth = this._viewableAreaWidth * this.zoomPercentage;

    let zoomedViewableAreaHeight =
      this._viewableAreaHeight * this.zoomPercentage;

    this._zoomedViewableAreaWidth = zoomedViewableAreaWidth;

    this._zoomedViewableAreaHeight = zoomedViewableAreaHeight;

    this._translateAttribute = this.getCenterTranslation(
      reportArea.getBBox(),
      this._zoomedViewableAreaWidth,
      this._zoomedViewableAreaHeight
    );

    let translationData = {
      viewableAreaHeight: zoomedViewableAreaHeight,
      viewableAreaWidth: zoomedViewableAreaWidth,
      translateAttribute: this._translateAttribute,
      viewBoxAttribute: this._viewBoxAttribute,
    };

    let translationDataStr = JSON.stringify(translationData);

    this.sharedService.emmitTranslationString(translationDataStr);
  }

  //Zoom logic based on boolean (e.g. IsZoomIn = true)
  zoom(isZoomIn: boolean) {
    let reportArea: any = this.hostElement.nativeElement.querySelector(
      '#reportArea'
    );

    if (isZoomIn) {
      this.zoomPercentage = this.zoomPercentage - 0.25;
      this.RoundedValue = Math.round(100/this.zoomPercentage);
    } else {
      this.zoomPercentage = this.zoomPercentage + 0.25;
      this.RoundedValue = Math.round(100/this.zoomPercentage);
    }

    if (this.zoomPercentage <= 2 && this.zoomPercentage >= 0.5) {
      console.log(this.zoomPercentage + ' % ' + this.zoomPercentage * 100);
      let zoomedViewableAreaWidth =
        this._viewableAreaWidth * this.zoomPercentage;

      let zoomedViewableAreaHeight =
        this._viewableAreaHeight * this.zoomPercentage;

      this._zoomedViewableAreaWidth = zoomedViewableAreaWidth;

      this._zoomedViewableAreaHeight = zoomedViewableAreaHeight;

      this._viewBoxAttribute = `0 0 ${zoomedViewableAreaWidth} ${zoomedViewableAreaHeight}`;

      this._translateAttribute = this.getCenterTranslation(
        reportArea.getBBox(),
        zoomedViewableAreaWidth,
        zoomedViewableAreaHeight
      );

      let zoomTranslationData = {
        viewableAreaHeight: zoomedViewableAreaHeight,
        viewableAreaWidth: zoomedViewableAreaWidth,
        viewBoxAttribute: this._viewBoxAttribute,
        translateAttribute: this._translateAttribute,
      };

      this.sharedService.emmitZoomViewBoxString(
        JSON.stringify(zoomTranslationData)
      );
    } else {
      if (isZoomIn) {
        this.zoomPercentage = 0.5;
        this.RoundedValue = Math.round(100/this.zoomPercentage);
        console.log('zoom out limit exeed ' + this.zoomPercentage);
      } else {
        this.zoomPercentage = 2;
        this.RoundedValue = Math.round(100/this.zoomPercentage);
        console.log('zoom in limit exeed ' + this.zoomPercentage);
      }
    }
  }

  // Commented for future references
  // getViewableAreaDimesion(svgViewableArea: any) {
  //   let boundryBox = svgViewableArea.getBoundingClientRect();

  //   let viewableAreaHeight = boundryBox.height;
  //   let viewableAreaWidth = boundryBox.width;
  //   return { viewableAreaHeight, viewableAreaWidth };
  // }

  getCenterTranslation(
    reportBoundryBox: any,
    viewableAreaWidth: number,
    viewableAreaHeight: number
  ): string {
    // console.log(reportBoundryBox);

    reportBoundryBox = reportBoundryBox;

    let reportCenterX = reportBoundryBox.width / 2 + reportBoundryBox.x;
    let reportCenterY = reportBoundryBox.height / 2 + reportBoundryBox.y;

    let differanceX = viewableAreaWidth / 2 - reportCenterX;
    let differanceY = viewableAreaHeight / 2 - reportCenterY;

    return `translate (${differanceX},${differanceY})`;
  }
}
