import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centerdyanamic',
  templateUrl: './centerdyanamic.component.html',
  styleUrls: ['./centerdyanamic.component.css'],
})
export class CenterdynamicComponent {
  coordinates = [];

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.coordinates.push({
        x: Math.round((Math.random() * 5000) % 500),
        y: Math.round((Math.random() * 5000) % 500),
      });
    }
  }
}
