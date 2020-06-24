import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-circle',
  templateUrl: './static-circle.component.html',
  styleUrls: ['./static-circle.component.css']
})
export class StaticCircleComponent  {
  toggle: boolean = false;
  x: number;
  y: number;

  viewboxstr = ``;
  constructor() {

  }
  center(){
    this.toggle = !this.toggle;
    console.log(this.toggle, ' toggled !');
    this.x = 250;
     this.y = 500;

     this.viewboxstr=`0 0 1000 2000` ;
  }
}
