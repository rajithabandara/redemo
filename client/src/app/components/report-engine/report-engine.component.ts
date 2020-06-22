import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpdataService } from '../../services/httpdata.service';



@Component({
  selector: 'app-report-engine',
  templateUrl: './report-engine.component.html',
  styleUrls: ['./report-engine.component.css'],
})
export class ReportEngineComponent {
  public rectCoordinates = [];
  public cirCoordinates = [];
  public ellipseCoordinates = [];
  timer = null;

  param: any;
  constructor(private router: ActivatedRoute, private httpdata: HttpdataService ) {
    this.router.paramMap.subscribe((data) => {
      this.param = data.get('id');
      console.log(this.param);


      // switch (this.param) {}
      // case 'rectangles':
      //   clearInterval(this.timer);
      //   this.httpdata.getServerTime().subscribe((data) => {
      //     console.log(data);

      //     this.rectCoordinates = [];

      //     for (let i = 0; i < data.timeinseconds; i++) {
      //       let x = (Math.random() * 5000) % 500;
      //       let y = (Math.random() * 5000) % 500;

      //       this.rectCoordinates.push({
      //         x: x,
      //         y: y,
      //       });
      //     }
      //   });

      //   break;

      // case 'circles':
      //   clearInterval(this.timer);
      //   this.httpdata.getRandomInt().subscribe((data) => {
      //     console.log(data);
      //     this.cirCoordinates = [];
      //     for (let i = 0; i < data.randomint; i++) {
      //       let x = (Math.random() * 5000) % 500;
      //       let y = (Math.random() * 5000) % 500;

      //       this.cirCoordinates.push({
      //         x: x,
      //         y: y,
      //       });
      //     }
      //   });
      //   break;

      // case 'ellipse':
        // var sec = Math.round(new Date().getSeconds() / 10);
        // console.log(sec);
        // this.ellipseCoordinates = [];
        // for (let i = 0; i < sec; i++) {
        //   let x = (Math.random() * 5000) % 500;
        //   let y = (Math.random() * 5000) % 500;

        //   this.ellipseCoordinates.push({
        //     x: x,
        //     y: y,
        //   });
        // }

        // this.timer = setInterval(() => {
        //   var sec = Math.round(new Date().getSeconds() / 10);
        //   console.log(sec);
        //   this.ellipseCoordinates = [];
        //   for (let i = 0; i < sec; i++) {
        //     let x = (Math.random() * 5000) % 500;
        //     let y = (Math.random() * 5000) % 500;

        //     this.ellipseCoordinates.push({
        //       x: x,
        //       y: y,
        //     });
        //   }
        // }, 10000);

      //   break;

      // default:
      //   break;

    });
  }

  ngOnInit(): void { }
}
