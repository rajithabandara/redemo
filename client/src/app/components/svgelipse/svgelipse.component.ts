import { Component, } from '@angular/core';

@Component({
  selector: 'app-svgelipse',
  templateUrl: './svgelipse.component.html',
  styleUrls: ['./svgelipse.component.css'],
})
export class SvgelipseComponent {
  ellipseCoordinates: any;
  timer = null;

  constructor() {
    var sec = Math.round(new Date().getSeconds() / 10);
    console.log(sec);
    this.ellipseCoordinates = [];
    for (let i = 0; i < sec; i++) {
      let x = (Math.random() * 5000) % 500;
      let y = (Math.random() * 5000) % 500;

      this.ellipseCoordinates.push({
        x: x,
        y: y,
      });
    }

    this.timer = setInterval(() => {
      var sec = Math.round(new Date().getSeconds() / 10);
      console.log(sec);
      this.ellipseCoordinates = [];
      for (let i = 0; i < sec; i++) {
        let x = (Math.random() * 5000) % 500;
        let y = (Math.random() * 5000) % 500;

        this.ellipseCoordinates.push({
          x: x,
          y: y,
        });
      }
    }, 10000);
  }
}
