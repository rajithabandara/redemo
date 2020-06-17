import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svgcircle',
  templateUrl: './svgcircle.component.html',
  styleUrls: ['./svgcircle.component.css'],
})
export class SvgcircleComponent implements OnInit {
  @Input()
  coordinates: any;

  // @Input()
  // xcoordinate: number;
  // @Input()
  // ycoordinate: number;

  constructor() {}

  ngOnInit(): void {
    console.log(this.coordinates);
  }
}
