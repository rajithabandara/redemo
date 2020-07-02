import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../../services/sharedData.service';

@Component({
  selector: 'app-dynamic-polygon',
  templateUrl: './dynamic-polygon.component.html',
  styleUrls: ['./dynamic-polygon.component.css'],
})
export class DynamicPolygonComponent implements OnInit, OnDestroy {
  translateAttribute = ``;
  viewableAreaWidth = 0;
  viewableAreaHeight = 0;
  coordinates = [];
  sharedServiceObservable: any;

  constructor(private sharedService: SharedService) {
    for (let i = 0; i < 20; i++) {
      let x = Math.round((Math.random() * 5000) % 500);
      let y = Math.round((Math.random() * 5000) % 2500);

      this.coordinates.push(
        `${x + 100},${y + 10} ${x + 10},${y + 198} ${x + 190},${y + 87} ${
          x + 10
        },${y + 78} ${x + 160},${y + 198}`
      );
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
