import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svgelipse',
  templateUrl: './svgelipse.component.html',
  styleUrls: ['./svgelipse.component.css'],
})
export class SvgelipseComponent implements OnInit {
  @Input()
  coordinates: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.coordinates);
  }
}
