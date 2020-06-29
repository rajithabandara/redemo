import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-rectangle3',
  templateUrl: './rectangle3.component.html',
  styleUrls: ['./rectangle3.component.css']
})
export class Rectangle3Component implements OnInit {
  @Input()
  translateAttribute = ``;
  @Input()
  reportWidth = 0;
  @Input()
  reportHeight = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
