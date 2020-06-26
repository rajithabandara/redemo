import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rectangle1',
  templateUrl: './rectangle1.component.html',
  styleUrls: ['./rectangle1.component.css']
})
export class Rectangle1Component implements OnInit {
  translateAttribute = ``;
  reportWidth: number = 0;
  reportHeight: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
