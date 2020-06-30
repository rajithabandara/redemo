import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalcService {
  constructor() {}

  calculateReportSize(coordinates: any): any {
    let heightArray = coordinates.map((e) => e.y);

    let widthArray = coordinates.map((e) => e.x);

    heightArray.sort((a: number, b: number) => a - b);
    widthArray.sort((a: number, b: number) => a - b);

    console.log(heightArray, widthArray);

    let viewableAreaHeight = heightArray[heightArray.length - 1] + 300;
    let viewableAreaWidth = widthArray[widthArray.length - 1] + 300;

    return { viewableAreaHeight, viewableAreaWidth };
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

    let centerX = reportBoundryBox.width / 2 + reportBoundryBox.x;
    let centerY = reportBoundryBox.height / 2 + reportBoundryBox.y;

    let differanceX = viewableAreaWidth / 2 - centerX;
    let differanceY = viewableAreaHeight / 2 - centerY;

    return `translate (${differanceX},${differanceY})`;
  }
}
