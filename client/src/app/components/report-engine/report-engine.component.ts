import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalcService } from '../../services/calc.service';

@Component({
  selector: 'app-report-engine',
  templateUrl: './report-engine.component.html',
  styleUrls: ['./report-engine.component.css'],
})
export class ReportEngineComponent {
  param: any;
  translateAttribute = ``;
  reportWidth: number;
  reportHeight: number;
  toggle: boolean = false;
  rectcoordx: number;
  rectcoordy: number;

  calculateService: CalcService;

  constructor(private router: ActivatedRoute, calculateService: CalcService) {
    this.calculateService = calculateService;

    this.router.paramMap.subscribe((data) => {
      this.param = data.get('id');
      console.log(this.param);
    });
  }

  center() {
    console.log(this.toggle, ' toggled !');

    if (!this.toggle) {
      let svgarea: any = document.getElementById('svgarea');

      let grouparea: any = document.getElementById('grouparea');

      let bbox = svgarea.getBoundingClientRect();

      // let rectbbox = svgarea.getBBox();

      // let midx = bbox.width / 2;

      this.reportHeight = bbox.height;
      this.reportWidth = bbox.width;

      console.log(grouparea.getBBox());

      // this.rectcoordx = this.reportWidth / 2 - rectbbox.width / 2;
      // this.rectcoordy = this.reportHeight / 2 - rectbbox.height / 2;

      // console.log(rectbbox.height, rectbbox.width);

      let a =
        this.reportWidth / 2 -
        grouparea.getBBox().width / 2 -
        grouparea.getBBox().x;

      let b =
        this.reportHeight / 2 -
        grouparea.getBBox().height / 2 -
        grouparea.getBBox().y;

      console.log(a);

      this.translateAttribute = `translate( ${a} , ${b} )`;

      // this.translateAttribute = this.calculateService.calculateCenter(
      //   rectbbox,
      //   this.reportWidth,
      //   this.reportHeight
      // );
    } else {
      this.translateAttribute = `translate( 0 , 0 )`;
    }
    this.toggle = !this.toggle;
  }
}
