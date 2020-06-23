import { Component } from '@angular/core';
import { HttpdataService } from 'src/app/services/httpdata.service';

@Component({
  selector: 'app-svgrect',
  templateUrl: './svgrect.component.html',
  styleUrls: ['./svgrect.component.css'],
})
export class SvgrectComponent {
  public rectCoordinates = [];

  constructor(private httpData: HttpdataService) {
    this.httpData.getServerTime().subscribe((data) => {
      console.log(data);

      this.rectCoordinates = [];

      for (let i = 0; i < data.timeinseconds; i++) {
        let x = (Math.random() * 5000) % 500;
        let y = (Math.random() * 5000) % 500;

        this.rectCoordinates.push({
          x: x,
          y: y,
        });
      }
    });
  }
}
