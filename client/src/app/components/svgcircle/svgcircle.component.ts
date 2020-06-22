import { Component, OnInit, Input } from '@angular/core';
import { HttpdataService } from 'src/app/services/httpdata.service';



@Component({
  selector: 'app-svgcircle',
  templateUrl: './svgcircle.component.html',
  styleUrls: ['./svgcircle.component.css'],
})
export class SvgcircleComponent implements OnInit {
  @Input()
  coordinates: any;
  public cirCoordinates = [];
  timer = null;
  constructor(private httpdata: HttpdataService) {}

  ngOnInit(): void {
    console.log(this.coordinates);
    this.createCir();
  }
  
createCir(){
  clearInterval(this.timer);
  this.httpdata.getRandomInt().subscribe((data) => {
    console.log(data);
    this.cirCoordinates = [];
    for (let i = 0; i < data.randomint; i++) {
      let x = (Math.random() * 5000) % 500;
      let y = (Math.random() * 5000) % 500;

      this.cirCoordinates.push({
        x: x,
        y: y,
      });
    }
  });
}

}
