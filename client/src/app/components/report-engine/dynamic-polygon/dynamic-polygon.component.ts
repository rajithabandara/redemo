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
        `${x + 150},${y + 75} ${x + 258},${y + 137.5} ${x + 258},${y + 262.5} ${
          x + 150
        },${y + 325} ${x + 42},${y + 262.6}  ${x + 42},${y + 137.5}`
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
