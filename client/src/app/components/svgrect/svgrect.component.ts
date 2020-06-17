import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svgrect',
  templateUrl: './svgrect.component.html',
  styleUrls: ['./svgrect.component.css'],
})
export class SvgrectComponent implements OnInit {
  @Input()
  coordinates: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.coordinates);
  }
}
