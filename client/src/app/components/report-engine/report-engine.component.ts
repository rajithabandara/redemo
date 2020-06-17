import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-engine',
  templateUrl: './report-engine.component.html',
  styleUrls: ['./report-engine.component.css']
})
export class ReportEngineComponent implements OnInit {
  qparam:any;
//   plain:any;
//  circle:any;
//  rectan:any;
//  ellipse:any;

  constructor(router:ActivatedRoute) {

    router.queryParamMap.subscribe(data =>{
      this.qparam = data.get('item');
      console.log(this.qparam);

      // switch (this.qparam) {
      //   case "circle":
      //       console.log("It is a Sunday.");
      //       break;
      //   case "plain":
      //       console.log("It is a Monday.");
      //       break;
      //   case "rectan":
      //       console.log("It is a Tuesday.");
      //       break;
      //       default:
      //         console.log("No such day exists!");
      //         break;
      // }
        })

   }

  ngOnInit(): void {
  }

}
