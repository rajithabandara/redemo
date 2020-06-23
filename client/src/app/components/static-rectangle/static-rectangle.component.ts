import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-rectangle',
  templateUrl: './static-rectangle.component.html',
  styleUrls: ['./static-rectangle.component.css']
})
export class StaticRectangleComponent  {

  x: number;
  y: number;

  constructor() {
    let x = (Math.random() * 5000) % 500;
    let y = (Math.random() * 5000) % 500;
  }
  center(){
    this.x = 100;
     this.y = 350;
  }
}
