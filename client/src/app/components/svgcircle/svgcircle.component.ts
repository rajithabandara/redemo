import { Component, OnInit, Input } from '@angular/core';




@Component({
  selector: 'app-svgcircle',
  templateUrl: './svgcircle.component.html',
  styleUrls: ['./svgcircle.component.css'],
})
export class SvgcircleComponent implements OnInit {
  @Input()
  coordinates: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.coordinates);
  }
}
