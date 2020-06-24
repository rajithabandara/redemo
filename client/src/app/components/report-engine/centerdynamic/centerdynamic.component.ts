import { Component, OnInit } from '@angular/core';
import { CalcService } from '../../../services/calc.service';

@Component({
  selector: 'app-centerdynamic',
  templateUrl: './centerdynamic.component.html',
  styleUrls: ['./centerdynamic.component.css'],
})
export class CenterdynamicComponent {
  coordinates = [];

  toggle: boolean = false;

  atrstr = ``;

  viewBoxAttribute = ``;

  reportHeight: number;

  reportWidth: number;

  calculateService: CalcService;

  constructor(calculateService: CalcService) {
    this.calculateService = calculateService;
    for (let i = 0; i < 20; i++) {
      this.coordinates.push({
        x: Math.round((Math.random() * 5000) % 4000),
        y: Math.round((Math.random() * 5000) % 4000),
      });
    }

    let reportDimesion = calculateService.calculateReportSize(this.coordinates);

    console.log(reportDimesion);

    this.reportHeight = reportDimesion.reportHeight;
    this.reportWidth = reportDimesion.reportWidth;

    // this.reportHeight = 4000;
    // this.reportWidth = 4000;

    // console.log(this.reportWidth, this.reportHeight);

    // this.viewBoxAttribute = `0 0 2400 2400`;

    this.viewBoxAttribute = `0 0  ${this.reportWidth} ${this.reportHeight}`;
  }

  center() {
    this.toggle = !this.toggle;

    console.log(this.toggle, ' toggled !');

    if (!this.toggle) {
      let grouppElement: any = document.querySelector('#groptsvg');

      this.atrstr = this.calculateService.calculateCenter(
        grouppElement.getBBox(),
        this.reportWidth,
        this.reportHeight
      );
    }
  }
}
