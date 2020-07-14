import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../../services/sharedData.service';

@Component({
  selector: 'app-rectangle3',
  templateUrl: './rectangle3.component.html',
  styleUrls: ['./rectangle3.component.css'],
})
export class Rectangle3Component implements OnInit , OnDestroy{
  translateAttribute = ``;
  viewableAreaWidth = 0;
  viewableAreaHeight = 0;

  sharedServiceObservable: any;

  constructor(private sharedService: SharedService) {}
  ngOnDestroy(): void {
    console.log('unsubscribe');
    this.sharedServiceObservable.unsubscribe();
    this.sharedService.contentReset.emit();
  }
  ngOnInit(): void {
    // this.sharedServiceObservable = this.sharedService.sharedMessage.subscribe(
    //   (translationDataStr) => {
    //     console.log(translationDataStr);

    //     let translationData = JSON.parse(translationDataStr);

    //     this.translateAttribute = translationData.translateAttribute;
    //     this.viewableAreaWidth = translationData.viewableAreaWidth;
    //     this.viewableAreaHeight = translationData.viewableAreaHeight;
    //   }
    // );

    this.sharedServiceObservable = this.sharedService.contentCentered.subscribe(
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
