import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpdataService } from '../httpdata.service';

@Component({
  selector: 'app-report-engine',
  templateUrl: './report-engine.component.html',
  styleUrls: ['./report-engine.component.css'],
})
export class ReportEngineComponent implements OnInit {
  public rectcoordinates = [];
  public circoordinates = [];


  qparam: any;
  constructor(router: ActivatedRoute, httpdata: HttpdataService) {
    router.queryParamMap.subscribe((data) => {
      this.qparam = data.get('item');
      console.log(this.qparam);

      switch (this.qparam) {
        case 'rect':
          httpdata.getservertime().subscribe((data) => {
            console.log(data);

            this.rectcoordinates = [];

            for (let i = 0; i < data.timeinseconds; i++) {
              let x = (Math.random() * 5000) % 500;
              let y = (Math.random() * 5000) % 500;

              this.rectcoordinates.push({
                x: x,
                y: y,
              });
            }

          });

          break;
          case 'circle':
            httpdata.getrandomint().subscribe((data)=>{
              console.log(data);
              this.circoordinates =[];
              for (let i = 0; i < data.randomint ; i++) {
                let x = (Math.random() * 5000) % 500;
                let y = (Math.random() * 5000) % 500;

                this.circoordinates.push({
                  x: x,
                  y: y,
                });
              }
            });
            break;

        default:
          break;
      }
    });
  }

  ngOnInit(): void {}
}
