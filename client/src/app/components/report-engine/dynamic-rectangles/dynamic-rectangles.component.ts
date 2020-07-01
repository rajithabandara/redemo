import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/sharedData.service';

@Component({
  selector: 'app-dynamic-rectangles',
  templateUrl: './dynamic-rectangles.component.html',
  styleUrls: ['./dynamic-rectangles.component.css'],
})
export class DynamicRectanglesComponent implements OnInit {
  translateAttribute = ``;
  viewableAreaWidth = 0;
  viewableAreaHeight = 0;
  coordinates = [];

  constructor(private sharedService: SharedService) {
    for (let i = 0; i < 20; i++) {
      this.coordinates.push({
        x: Math.round((Math.random() * 5000) % 1000),
        y: Math.round((Math.random() * 5000) % 1000),
      });
    }
  }
  ngOnInit(): void {
    this.sharedService.sharedMessage.subscribe((translationDataStr) => {
      console.log(translationDataStr);

      let translationData = JSON.parse(translationDataStr);

      this.translateAttribute = translationData.translateAttribute;
      this.viewableAreaWidth = translationData.viewableAreaWidth;
      this.viewableAreaHeight = translationData.viewableAreaHeight;
    });
  }
}
