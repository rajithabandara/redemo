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

    let reportHeight = heightArray[heightArray.length - 1] + 300;
    let reportWidth = widthArray[widthArray.length - 1] + 300;

    return { reportHeight, reportWidth };
  }

  calculateReportSizeWithBBox(svgArea: any) {
    let boundryBox = svgArea.getBoundingClientRect();

    let reportHeight = boundryBox.height;
    let reportWidth = boundryBox.width;
    return { reportHeight, reportWidth };
  }

  calculateCenter(
    boundryBox: any,
    reportWidth: number,
    reportHeight: number
  ): string {
    console.log(boundryBox);

    let centerX = boundryBox.width / 2 + boundryBox.x;
    let centerY = boundryBox.height / 2 + boundryBox.y;

    let differanceX = reportWidth / 2 - centerX;
    let differanceY = reportHeight / 2 - centerY;

    console.log('diff - ', differanceX, differanceY);

    return `translate(${differanceX},${differanceY})`;
  }
}


// console.log(grouparea.getBBox());

// let a =
//   this.reportWidth / 2 -
//   grouparea.getBBox().width / 2 -
//   grouparea.getBBox().x;

// let b =
//   this.reportHeight / 2 -
//   grouparea.getBBox().height / 2 -
//   grouparea.getBBox().y;

// console.log(a);

// this.translateAttribute = `translate( ${a} , ${b} )`;