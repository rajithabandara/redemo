import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rectangle1',
  templateUrl: './rectangle1.component.html',
  styleUrls: ['./rectangle1.component.css'],
})
export class Rectangle1Component implements OnInit {
  @Input()
  translateAttribute = ``;
  @Input()
  viewableAreaWidth = 0;
  @Input()
  viewableAreaHeight = 0;

  constructor() {}

  ngOnInit(): void {}
}
