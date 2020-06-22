import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centerdemo',
  templateUrl: './centerdemo.component.html',
  styleUrls: ['./centerdemo.component.css'],
})
export class CenterdemoComponent implements OnInit {
  x: number;
  y: number;

  constructor() {
    this.x = Math.round((Math.random() * 5000) % 500);
    this.y = Math.round((Math.random() * 5000) % 500);
  }

  ngOnInit(): void {
    console.log(this.x, ' ', this.y);
  }

  center() {
    this.x = 400;
    this.y = 300;

    console.log('center - ', this.x, ' ', this.y);
  }
}
