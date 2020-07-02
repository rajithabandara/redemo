import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../../services/sharedData.service';

@Component({
  selector: 'app-dynamic-circles',
  templateUrl: './dynamic-circles.component.html',
  styleUrls: ['./dynamic-circles.component.css'],
})
export class DynamicCirclesComponent implements OnInit, OnDestroy {
  translateAttribute = ``;
  viewableAreaWidth = 0;
  viewableAreaHeight = 0;
  coordinates = [];
  sharedServiceObservable: any;

  constructor(private sharedService: SharedService) {
    for (let i = 0; i < 20; i++) {
      this.coordinates.push({
        x: Math.round((Math.random() * 5000) % 500),
        y: Math.round((Math.random() * 5000) % 500),
      });
    }
  }

  ngOnDestroy(): void {
    console.log('unsubscribe');
    this.sharedServiceObservable.unsubscribe();
  }
  ngOnInit(): void {
    this.sharedServiceObservable = this.sharedService.sharedMessage.subscribe(
      (translationDataStr) => {
        console.log(translationDataStr);

        let translationData = JSON.parse(translationDataStr);

        this.translateAttribute = translationData.translateAttribute;
        this.viewableAreaWidth = translationData.viewableAreaWidth;
        this.viewableAreaHeight = translationData.viewableAreaHeight;
      }
    );
  }
}
