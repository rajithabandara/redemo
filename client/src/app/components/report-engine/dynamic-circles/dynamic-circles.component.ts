import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../../services/sharedData.service';

@Component({
  selector: 'app-dynamic-circles',
  templateUrl: './dynamic-circles.component.html',
  styleUrls: ['./dynamic-circles.component.css'],
})
export class DynamicCirclesComponent implements OnInit {
  translateAttribute = ``;
  viewableAreaWidth = 0;
  viewableAreaHeight = 0;

  constructor(private sharedService: SharedService) {

    

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
