import { Component } from '@angular/core';

@Component({
  selector: 'app-static-rectangle',
  templateUrl: './static-rectangle.component.html',
  styleUrls: ['./static-rectangle.component.css'],
})
export class StaticRectangleComponent {
  x: number;
  y: number;

  translateArrt = ``;

  constructor() {
    this.x = 300;
    this.y = 500;
  }
  center() {
    this.translateArrt = `translate( 200 , 250 )`;
  }
}
