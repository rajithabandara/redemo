import {
  Component,
  ElementRef,
  AfterContentInit,
  AfterViewInit,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { SharedService } from '../../services/sharedData.service';

@Component({
  selector: 'app-report-engine',
  templateUrl: './report-engine.component.html',
  styleUrls: ['./report-engine.component.css'],
})
export class ReportEngineComponent implements OnInit, OnDestroy, AfterViewInit {
  //Variable Declaration
  private _translateAttribute = ``;
  private _viewableAreaWidth: number = 1500;
  private _viewableAreaHeight: number = 1500;
  private _viewBoxAttribute = `0 0 1500 1500`;
  private _zoomedViewableAreaWidth = 1500;
  private _zoomedViewableAreaHeight = 1500;
  private _contentResetSub: any;
  private _maxZoomLevel = 2; //percentage 200%
  private _minZoomLevel = 0.5; //percentage 50%

  public zoomPercentage = 1;
  private _viewBoxX = 0;
  private _viewBoxY = 0;
  private _newViewBoxX = 0;
  private _newViewBoxY = 0;
  isPointerDown = false;
  public roundedValue: number = Math.round(100 / this.zoomPercentage);
  pointerOrigin = {
    x: 0,
    y: 0,
  };

  constructor(
    private hostElement: ElementRef,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.registerEvent();
  }

  ngOnDestroy(): void {
    if (this._contentResetSub) {
      this._contentResetSub.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    let svgViewableArea: any = this.hostElement.nativeElement.querySelector(
      '#svgViewableArea'
    );

    let dimesions = this.getViewableAreaDimesion(svgViewableArea);

    this._viewableAreaWidth = dimesions.viewableAreaWidth;

    this._viewableAreaHeight = dimesions.viewableAreaHeight;

    this._zoomedViewableAreaWidth = dimesions.viewableAreaWidth;

    this._zoomedViewableAreaHeight = dimesions.viewableAreaHeight;

    this._viewBoxAttribute = ` 0 0 ${
      this._viewableAreaWidth * this.zoomPercentage
    } ${this._viewableAreaHeight * this.zoomPercentage}`;

    // let resizeData = {
    //   viewableAreaHeight: this._viewableAreaHeight * this.zoomPercentage,
    //   viewableAreaWidth: this._viewableAreaWidth * this.zoomPercentage,
    //   translateAttribute: this._translateAttribute,
    //   viewBoxAttribute: this._viewBoxAttribute,
    // };

    // let resizeTranslationDataStr = JSON.stringify(resizeData);

    // this.sharedService.emmitResizeViewBoxString(resizeTranslationDataStr);

    svgViewableArea.addEventListener('pointerdown', this.onPointerDown); // Pointer is pressed
    svgViewableArea.addEventListener('pointerup', this.onPointerUp); // Releasing the pointer
    svgViewableArea.addEventListener('pointerleave', this.onPointerUp); // Pointer gets out of the svgViewableArea area
    svgViewableArea.addEventListener('pointermove', this.onPointerMove); // Pointer is moving
    svgViewableArea.addEventListener('touchstart', this.onPointerDown); // Finger is touching the screen
    svgViewableArea.addEventListener('touchend', this.onPointerUp); // Finger is no longer touching the screen
    svgViewableArea.addEventListener('touchmove', this.onPointerMove); // Finger is moving

    window.addEventListener('resize', () => {
      let svgViewableArea: any = document.querySelector('#svgViewableArea');

      let dimesions = this.getViewableAreaDimesion(svgViewableArea);

      this._viewableAreaWidth = dimesions.viewableAreaWidth;

      this._viewableAreaHeight = dimesions.viewableAreaHeight;

      this._viewBoxAttribute = `${this._viewBoxX} ${this._viewBoxY} ${
        dimesions.viewableAreaWidth * this.zoomPercentage
      } ${dimesions.viewableAreaHeight * this.zoomPercentage} `;

      let resizeData = {
        viewableAreaHeight: this._viewableAreaHeight * this.zoomPercentage,
        viewableAreaWidth: this._viewableAreaWidth * this.zoomPercentage,
        translateAttribute: this._translateAttribute,
        viewBoxAttribute: this._viewBoxAttribute,
      };

      this.sharedService.emmitResizeViewBoxString(JSON.stringify(resizeData));

      // this.ratio =
      //   this._viewableAreaWidth / svgViewableArea.getBoundingClientRect().width;
      // console.log('"ratio - ' + this.ratio);
    });
  }

  //Align all items on center
  center() {
    let svgViewableArea: any = this.hostElement.nativeElement.querySelector(
      '#svgViewableArea'
    );

    let reportArea: any = this.hostElement.nativeElement.querySelector(
      '#reportArea'
    );

    let dimesions = this.getViewableAreaDimesion(svgViewableArea);
    this._viewableAreaWidth = dimesions.viewableAreaWidth;
    this._viewableAreaHeight = dimesions.viewableAreaHeight;
    // this._zoomedViewableAreaWidth = dimesions.viewableAreaWidth;
    // this._zoomedViewableAreaHeight = dimesions.viewableAreaHeight;

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

    this._viewBoxAttribute = ` 0 0 ${zoomedViewableAreaWidth} ${zoomedViewableAreaHeight}`;

    let translationData = {
      viewableAreaHeight: zoomedViewableAreaHeight,
      viewableAreaWidth: zoomedViewableAreaWidth,
      translateAttribute: this._translateAttribute,
      viewBoxAttribute: this._viewBoxAttribute,
    };

    let translationDataStr = JSON.stringify(translationData);

    //this.sharedService.emmitTranslationString(translationDataStr);
    this.sharedService.contentCentered.emit(translationDataStr);
  }

  //Zoom logic based on boolean (e.g. IsZoomIn = true)
  zoom(isZoomIn: boolean) {
    let reportArea: any = this.hostElement.nativeElement.querySelector(
      '#reportArea'
    );

    if (isZoomIn) {
      this.zoomPercentage = this.zoomPercentage - 0.25;
      this.roundedValue = Math.round(100 / this.zoomPercentage);
    } else {
      this.zoomPercentage = this.zoomPercentage + 0.25;
      this.roundedValue = Math.round(100 / this.zoomPercentage);
    }

    if (
      this.zoomPercentage <= this._maxZoomLevel &&
      this.zoomPercentage >= this._minZoomLevel
    ) {
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

      // this.sharedService.emmitZoomViewBoxString(
      //   JSON.stringify(zoomTranslationData)
      // );

      this.sharedService.contentZoomed.emit(
        JSON.stringify(zoomTranslationData)
      );
    } else {
      if (isZoomIn) {
        this.zoomPercentage = 0.5;
        this.roundedValue = Math.round(100 / this.zoomPercentage);
        console.log('zoom out limit exeed ' + this.zoomPercentage);
      } else {
        this.zoomPercentage = 2;
        this.roundedValue = Math.round(100 / this.zoomPercentage);
        console.log('zoom in limit exeed ' + this.zoomPercentage);
      }
    }
  }

  registerEvent() {
    //Reset common event subscriber
    this._contentResetSub = this.sharedService.contentReset.subscribe(() => {
      this._translateAttribute = ``;
      this._viewableAreaWidth = 1500;
      this._viewableAreaHeight = 1500;
      this._viewBoxAttribute = `0 0 1500 1500`;
      this._zoomedViewableAreaWidth = 1500;
      this._zoomedViewableAreaHeight = 1500;
      this.zoomPercentage = 1;
      this.roundedValue = Math.round(100 / this.zoomPercentage);
    });
  }

  // Commented for future references
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
    // console.log(reportBoundryBox);

    reportBoundryBox = reportBoundryBox;

    let reportCenterX = reportBoundryBox.width / 2 + reportBoundryBox.x;
    let reportCenterY = reportBoundryBox.height / 2 + reportBoundryBox.y;

    let differanceX = viewableAreaWidth / 2 - reportCenterX;
    let differanceY = viewableAreaHeight / 2 - reportCenterY;

    return `translate (${differanceX},${differanceY})`;
  }

  getPointFromEvent(event) {
    // console.log('get pointer from event +' + event);

    var point = { x: 0, y: 0 };
    // If event is triggered by a touch event, we get the position of the first finger
    if (event.targetTouches) {
      point.x = event.targetTouches[0].clientX;
      point.y = event.targetTouches[0].clientY;
    } else {
      point.x = event.clientX;
      point.y = event.clientY;
    }

    // console.log(point);

    return point;
  }

  onPointerDown = (event) => {
    this.isPointerDown = true; // We set the pointer as down

    console.log('mouse down');

    // We get the pointer position on click/touchdown so we can get the value once the user starts to drag
    var pointerPosition = this.getPointFromEvent(event);

    // console.log(pointerPosition);

    this.pointerOrigin.x = pointerPosition.x;
    this.pointerOrigin.y = pointerPosition.y;
  };

  onPointerMove = (event) => {
    // Only run this function if the pointer is down
    if (!this.isPointerDown) {
      return;
    }
    // This prevent user to do a selection on the page
    event.preventDefault();
    // Get the pointer position
    var pointerPosition = this.getPointFromEvent(event);
    console.log(pointerPosition);
    // We calculate the distance between the pointer origin and the current position
    // The viewBox x & y values must be calculated from the original values and the distances
    this._newViewBoxX =
      this._viewBoxX - (pointerPosition.x - this.pointerOrigin.x);
    this._newViewBoxY =
      this._viewBoxY - (pointerPosition.y - this.pointerOrigin.y);

    // // We create a string with the new viewBox values
    // // The X & Y values are equal to the current viewBox minus the calculated distances

    var viewBoxString = `${this._newViewBoxX} ${this._newViewBoxY} ${this._zoomedViewableAreaWidth} ${this._zoomedViewableAreaHeight}`;
    this._viewBoxAttribute = viewBoxString;
    console.log(viewBoxString);
    let panTranslationData = {
      viewableAreaHeight: this._zoomedViewableAreaHeight,
      viewableAreaWidth: this._zoomedViewableAreaWidth,
      viewBoxAttribute: this._viewBoxAttribute,
      translateAttribute: this._translateAttribute,
    };

    this.sharedService.emmitPanViewBoxString(
      JSON.stringify(panTranslationData)
    );
    // We apply the new viewBox values onto the SVG
    // svg.setAttribute('viewBox', viewBoxString);
    // document.querySelector('.viewbox').innerHTML = viewBoxString;
  };
  onPointerUp = () => {
    // The pointer is no longer considered as down
    this.isPointerDown = false;
    // We save the viewBox coordinates based on the last pointer offsets
    this._viewBoxX = this._newViewBoxX;
    this._viewBoxY = this._newViewBoxY;
  };
}
