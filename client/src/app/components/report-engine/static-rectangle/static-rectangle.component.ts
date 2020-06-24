import { Component } from '@angular/core';

@Component({
  selector: 'app-static-rectangle',
  templateUrl: './static-rectangle.component.html',
  styleUrls: ['./static-rectangle.component.css']
})
export class StaticRectangleComponent {

  x: number;
  y: number;

  constructor() {

  }
  center() {
    this.x = 1000;
    this.y = 800;
  }
}
