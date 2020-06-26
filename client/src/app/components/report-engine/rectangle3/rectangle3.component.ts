import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle3',
  templateUrl: './rectangle3.component.html',
  styleUrls: ['./rectangle3.component.css']
})
export class Rectangle3Component implements OnInit {
  translateAttribute = ``;
  reportWidth: number = 0;
  reportHeight: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
