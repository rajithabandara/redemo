import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle2',
  templateUrl: './rectangle2.component.html',
  styleUrls: ['./rectangle2.component.css']
})
export class Rectangle2Component implements OnInit {
  translateAttribute = ``;
  reportWidth: number = 0;
  reportHeight: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
