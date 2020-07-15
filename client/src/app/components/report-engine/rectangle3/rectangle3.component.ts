import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../../services/sharedData.service';

@Component({
  selector: 'app-rectangle3',
  templateUrl: './rectangle3.component.html',
  styleUrls: ['./rectangle3.component.css'],
})
export class Rectangle3Component implements OnInit, OnDestroy {
  translateAttribute = ``;
  viewableAreaWidth = 0;
  viewableAreaHeight = 0;

  sharedServiceObservable: any;
  viewBoxAttribute = `0 0 1500 1500`;
  dynamicCSSUrl: any;
  sharedServiceObservableZoom: any;

  public _cssUrl: string;
  private _sharedServiceObservable: any;
  private _themePublishedSub: any;

  sharedServiceObservableResize: any;
  sharedServiceObservablePan: any;

  config = {
    base: {
      w: 800,
      h: 800,
      openAngle: 0,
      r: 50,
      axisAdjustment: 0,
      graphics: {
        visibility: 'visible',
        url: '/assets/level0.png',
        w: 100,
        h: 100,
      },
    },
    levels: [
      {
        w: 50,
        count: 1,
        text: { w: 0, margin: 10 },
        sectorMargin: 0,
        levelMargin: 0,
      },
      {
        w: 25,
        count: 2,
        text: { w: 10.5, wTop: 8.5, wBot: 14.5, margin: 10 },
        sectorMargin: 0,
        levelMargin: 0,
        graphics: {
          visibility: 'visible',
          url: '/assets/level1.png',
          w: 170,
          h: 170,
        },
      },
      {
        w: 38,
        count: 4,
        text: { w: 10, wTop: 13.5, wBot: 19.5, margin: 10 },
        sectorMargin: 0,
        levelMargin: 0,
      },
      {
        w: 40,
        count: 8,
        text: { w: 35, wTop: 13.5, wBot: 17.5, margin: 10 },
        sectorMargin: 0,
        levelMargin: 0,
      },
      {
        w: 55,
        count: 16,
        text: { w: 35, wTop: 22.5, wBot: 25.5, margin: 10 },
        sectorMargin: 0,
        levelMargin: 0,
      },
      {
        w: 60,
        count: 32,
        text: { w: 35, wTop: 33.5, wBot: 32.5, margin: 10 },
        sectorMargin: 0,
        levelMargin: 0,
      },
    ],
  };

  baseGrid = {
    visibility: 'visible', // hidden - visible
    X: { x1: 0, y1: 0, x2: 0, y2: 0 },
    Y: { x1: 0, y1: 0, x2: 0, y2: 0 },
  };

  chartLevel1 = { cx: 0, cy: 0, r: 0 };
  chartLevels = [];
  chartGraphics = [];

  helpers = [];

  constructor(private _sharedService: SharedService) {}
  ngOnDestroy(): void {
    console.log('unsubscribed');

    if (this._sharedServiceObservable) {
      this._sharedServiceObservable.unsubscribe();
    }

    if (this.sharedServiceObservableZoom) {
      this.sharedServiceObservableZoom.unsubscribe();
    }

    if (this._themePublishedSub) {
      this._themePublishedSub.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.reportinit();
    this._sharedService.contentReset.emit();

    this.sharedServiceObservable = this._sharedService.contentCentered.subscribe(
      (translationDataStr) => {
        console.log(translationDataStr);

        let translationData = JSON.parse(translationDataStr);

        this.translateAttribute = translationData.translateAttribute;
        this.viewableAreaWidth = translationData.viewableAreaWidth;
        this.viewableAreaHeight = translationData.viewableAreaHeight;
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

    this.sharedServiceObservableResize = this._sharedService.resizeSharedMessage.subscribe(
      (resizeData) => {
        console.log(resizeData);

        let resizeDataObj = JSON.parse(resizeData);

        // this.translateAttribute = resizeDataObj.translateAttribute;
        this.viewBoxAttribute = resizeDataObj.viewBoxAttribute;
        this.viewableAreaWidth = resizeDataObj.viewableAreaWidth;
        this.viewableAreaHeight = resizeDataObj.viewableAreaHeight;
      }
    );

    // this.sharedServiceObservablePan = this._sharedService.panSharedMessage.subscribe(
    //   (panData) => {
    //     console.log(panData);

    //     let panDataObj = JSON.parse(panData);

    //     // this.translateAttribute = resizeDataObj.translateAttribute;
    //     this.viewBoxAttribute = panDataObj.viewBoxAttribute; //panDataObj.viewBoxAttribute;
    //     // this.viewableAreaWidth = panDataObj.viewableAreaWidth;
    //     // this.viewableAreaHeight = panDataObj.viewableAreaHeight;
    //   }
    // );

    this.sharedServiceObservablePan = this._sharedService.contentPaning.subscribe(
      (panData) => {
        console.log(panData);

        let panDataObj = JSON.parse(panData);

        // this.translateAttribute = resizeDataObj.translateAttribute;
        this.viewBoxAttribute = panDataObj.viewBoxAttribute; //panDataObj.viewBoxAttribute;
        // this.viewableAreaWidth = panDataObj.viewableAreaWidth;
        // this.viewableAreaHeight = panDataObj.viewableAreaHeight;
      }
    );

    this._sharedService.contentRefresh.emit();
  }

  reportinit() {
    //Calculate base grid
    // this the base grid for x and y axis, all angles defined are relative to this
    // cordinate system at (0,0) translated based on the base width and height
    this.baseGrid.X = {
      x1: -this.config.base.w / 2,
      y1: 0,
      x2: this.config.base.w / 2,
      y2: 0,
    };
    this.baseGrid.Y = {
      x1: 0,
      y1: -this.config.base.h / 2,
      x2: 0,
      y2: this.config.base.h / 2,
    };

    // Calculate level 1
    this.chartLevel1.cx = 0;
    this.chartLevel1.cy = 0;
    this.chartLevel1.r = this.config.levels[0].w;

    if (this.config.base.graphics) {
      this.chartGraphics.push({
        x: 0 - this.config.base.graphics.w / 2,
        y: 0 - this.config.base.graphics.h / 2,
        url: this.config.base.graphics.url,
        w: this.config.base.graphics.w,
        h: this.config.base.graphics.h,
      });
    }

    // Calculate level 2
    var arcPoints = [
      { x: 0, y: this.config.base.r },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ]; // 4 points

    var arcx1 = 100 * Math.sin((45 * Math.PI) / 180);
    var arcy1 = 100 * Math.cos((45 * Math.PI) / 180);
    var arcx2 = 50 * Math.sin((45 * Math.PI) / 180);
    var arcy2 = 50 * Math.cos((45 * Math.PI) / 180);
    this.helpers = [
      { cx: arcx1, cy: arcy1 },
      { cx: arcx2, cy: arcy2 },
    ];

    for (var x = 1; x < this.config.levels.length; x++) {
      if (this.config.levels[x].graphics) {
        this.chartGraphics.push({
          x: 0 - this.config.levels[x].graphics.w / 2,
          y: 0 - this.config.levels[x].graphics.h / 2,
          url: this.config.levels[x].graphics.url,
          w: this.config.levels[x].graphics.w,
          h: this.config.levels[x].graphics.h,
        });
      }

      // console.log(' ----- Level ' + x + ' ==> ' + this.config.levels[x]);
      var sectorAngle =
        (360 - this.config.base.openAngle) / this.config.levels[x].count;
      //console.log(' Sector angle ' + sectorAngle);

      var r1 =
        this.sumPRev(this.config.levels, x - 1) +
        this.config.levels[x].levelMargin;
      var r2 =
        this.sumPRev(this.config.levels, x) + this.config.levels[x].levelMargin;

      var startLineX1 =
        r1 * Math.cos((this.config.levels[x].sectorMargin * Math.PI) / 180); //this.config.levels[x-1].w;
      var startLineY1 =
        r1 * Math.sin((this.config.levels[x].sectorMargin * Math.PI) / 180);

      var startLineX2 =
        r2 * Math.cos((this.config.levels[x].sectorMargin * Math.PI) / 180);
      var startLineY2 =
        r2 * Math.sin((this.config.levels[x].sectorMargin * Math.PI) / 180);

      // console.log(
      //   startLineX1 +
      //     ',' +
      //     startLineY1 +
      //     ' -- ' +
      //     startLineX2 +
      //     ',' +
      //     startLineY2
      // );

      var arcRadius = r2; //this.config.levels[x-1].w + this.config.levels[x].w;

      //console.log(' r = ' + arcRadius);

      var endLineX1 =
        arcRadius *
        Math.cos(
          ((sectorAngle - this.config.levels[x].sectorMargin) * Math.PI) / 180
        );
      var endLineY1 =
        arcRadius *
        Math.sin(
          ((sectorAngle - this.config.levels[x].sectorMargin) * Math.PI) / 180
        );

      var endLineX2 =
        r1 *
        Math.cos(
          ((sectorAngle - this.config.levels[x].sectorMargin) * Math.PI) / 180
        );
      var endLineY2 =
        r1 *
        Math.sin(
          ((sectorAngle - this.config.levels[x].sectorMargin) * Math.PI) / 180
        );

      // console.log(
      //   endLineX1 + ',' + endLineY1 + ' -- ' + endLineX2 + ',' + endLineY2
      // );

      // text path - have to calculated for up and down

      var textR2Top = r1 + this.config.levels[x].text.wTop;
      var endTextX1Top = textR2Top * Math.cos((sectorAngle * Math.PI) / 180);
      var endTextY1Top = textR2Top * Math.sin((sectorAngle * Math.PI) / 180);

      var textR2Bot = r1 + this.config.levels[x].text.wBot;
      var endTextX1Bot = textR2Bot * Math.cos((sectorAngle * Math.PI) / 180);
      var endTextY1Bot = textR2Bot * Math.sin((sectorAngle * Math.PI) / 180);

      var pathTextStrDown = `M ${endTextX1Bot} ${endTextY1Bot} A${textR2Bot} ${textR2Bot}, 0, 0 0,${textR2Bot} 0`;
      var pathTextStrUp = `M ${textR2Top} 0 A${textR2Top} ${textR2Top}, 0, 0 1,${endTextX1Top} ${endTextY1Top}`;

      // string formatting es6 -" ` " different quote character
      var pathStr = `M ${startLineX1} ${startLineY1} L${startLineX2} ${startLineY2} A${arcRadius} ${arcRadius}, 0, 0 1,${endLineX1} ${endLineY1} L${endLineX2} ${endLineY2}`;

      // console.log(' path --' + pathStr);
      //console.log(">>>>>>>"+this.config.base.axisAdjustment + ","+sectorAngle);

      for (var y = 0; y < this.config.levels[x].count; y++) {
        var pathTextStr = pathTextStrDown;
        if (y >= this.config.levels[x].count / 2) {
          pathTextStr = pathTextStrUp;
        }
        this.chartLevels.push({
          path: pathStr,
          transform:
            'rotate(' +
            (this.config.base.axisAdjustment + sectorAngle * y) +
            ' 0 0)',
          pathText: pathTextStr,
        });
      }
    }
  }
  sumPRev(levels, idx) {
    var tot = 0;
    for (var x = 0; x <= idx; x++) {
      tot += levels[x].w;
    }
    return tot;
  }

  // Get a point in on a arc sector axis - x (-left to right+) y ( -top to bottom+)
  getSectorPoints(radius, angleDeg) {
    return {
      x: radius * Math.cos((angleDeg * Math.PI) / 180),
      y: radius * Math.sin((angleDeg * Math.PI) / 180),
    };
  }
}
