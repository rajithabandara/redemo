import { Component, OnInit, Input } from '@angular/core';
import { HttpdataService } from 'src/app/services/httpdata.service';


@Component({
  selector: 'app-svgrect',
  templateUrl: './svgrect.component.html',
  styleUrls: ['./svgrect.component.css'],
})
export class SvgrectComponent implements OnInit {
  @Input()
  coordinates: any;
  timer = null;
  public rectCoordinates = [];

  constructor(private httpData: HttpdataService) { }

  ngOnInit(): void {
    console.log(this.coordinates);
    this.createRect();
  }
  createRect() {
    clearInterval(this.timer);
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
