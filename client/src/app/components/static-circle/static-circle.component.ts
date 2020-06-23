import { Component } from '@angular/core';


@Component({
  selector: 'app-static-circle',
  templateUrl: './static-circle.component.html',
  styleUrls: ['./static-circle.component.css']
})
export class StaticCircleComponent  {
  // public cirCoordinates = [];
  x: number;
  y: number;

  constructor() {
    let x = (Math.random() * 5000) % 500;
    let y = (Math.random() * 5000) % 500;
  }
  center(){
    this.x = 200;
     this.y = 400;
  }
}
