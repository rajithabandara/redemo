import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-rectangle2',
  templateUrl: './rectangle2.component.html',
  styleUrls: ['./rectangle2.component.css']
})
export class Rectangle2Component implements OnInit {
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
