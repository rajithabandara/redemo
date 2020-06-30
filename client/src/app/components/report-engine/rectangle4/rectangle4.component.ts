import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rectangle4',
  templateUrl: './rectangle4.component.html',
  styleUrls: ['./rectangle4.component.css'],
})
export class Rectangle4Component implements OnInit {
  @Input()
  translateAttribute = ``;
  @Input()
  viewableAreaWidth = 0;
  @Input()
  viewableAreaHeight = 0;

  constructor() {}

  ngOnInit(): void {}
}
