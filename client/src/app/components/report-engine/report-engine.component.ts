import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private router: ActivatedRoute, private hostElement: ElementRef) {
    this.router.paramMap.subscribe((data) => {
      this.param = data.get('id');
      console.log(this.param);
      this.toggle = false;
    });
  }

  center() {
    console.log(this.toggle, ' toggled !');

    if (!this.toggle) {
      let svgViewableArea: any = this.hostElement.nativeElement.querySelector(
        '#svgarea'
      );

      let reportArea: any = this.hostElement.nativeElement.querySelector(
        '#grouparea'
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
    } else {
      this.translateAttribute = `translate( 0 , 0 )`;
    }
    this.toggle = !this.toggle;
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

    reportBoundryBox = reportBoundryBox.getBBox();

    let reportCenterX = reportBoundryBox.width / 2 + reportBoundryBox.x;
    let reportCenterY = reportBoundryBox.height / 2 + reportBoundryBox.y;

    let differanceX = viewableAreaWidth / 2 - reportCenterX;
    let differanceY = viewableAreaHeight / 2 - reportCenterY;

    return `translate (${differanceX},${differanceY})`;
  }
}
