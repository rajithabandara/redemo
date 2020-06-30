import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/sharedData.service';

@Component({
  selector: 'app-rectangle1',
  templateUrl: './rectangle1.component.html',
  styleUrls: ['./rectangle1.component.css'],
})
export class Rectangle1Component implements OnInit {
  translateAttribute = ``;
  viewableAreaWidth = 0;
  viewableAreaHeight = 0;

  constructor(private sharedService: SharedService) {}
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
