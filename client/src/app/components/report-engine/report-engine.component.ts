import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalcService } from '../../services/calc.service';

@Component({
  selector: 'app-report-engine',
  templateUrl: './report-engine.component.html',
  styleUrls: ['./report-engine.component.css'],
})
export class ReportEngineComponent {



  // param: any;
  translateAttribute = ``;
  reportWidth: number = 0;
  reportHeight: number = 0;
  toggle: boolean = false;

  calculateService: CalcService;

  constructor(private router: ActivatedRoute, calculateService: CalcService) {
    this.calculateService = calculateService;

    // this.router.paramMap.subscribe((data) => {
    //   this.param = data.get('id');
    //   console.log(this.param);
    //
    // });
    this.toggle = false;
  }

  center() {
    console.log(this.toggle, ' toggled !');

    if (!this.toggle) {
      let svgarea: any = document.getElementById('svgarea');

      let grouparea: any = document.getElementById('grouparea');

      let {
        reportHeight,
        reportWidth,
      } = this.calculateService.calculateSVGSizeWithBBox(svgarea);

      this.reportHeight = reportHeight;
      this.reportWidth = reportWidth;

      this.translateAttribute = this.calculateService.calculateCenter(
        grouparea.getBBox(),
        this.reportWidth,
        this.reportHeight
      );

      console.log(
        this.calculateService.calculateCenter(
          grouparea.getBBox(),
          this.reportWidth,
          this.reportHeight
        )
      );
    } else {
      this.translateAttribute = `translate( 0 , 0 )`;
    }
    this.toggle = !this.toggle;
  }
}
