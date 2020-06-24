import { Component} from '@angular/core';

@Component({
  selector: 'app-static-ellipse',
  templateUrl: './static-ellipse.component.html',
  styleUrls: ['./static-ellipse.component.css']
})
export class StaticEllipseComponent {

  x: number;
  y: number;

  constructor() {
      }
  center(){
    this.x = 300;
     this.y = 300;
  }
}
