import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-circle',
  templateUrl: './static-circle.component.html',
  styleUrls: ['./static-circle.component.css'],
})
export class StaticCircleComponent {
  translateArrt = ``;

  constructor() {
    // let x = (Math.random() * 5000) % 500;
    // let y = (Math.random() * 5000) % 500;
  }
  center() {
    this.translateArrt = `translate( 300 , 50 )`;

    // this.x = 150;
    //  this.y = 400;
    //  this.a = 1200;
    //  this.b = 3200;
  }
}
