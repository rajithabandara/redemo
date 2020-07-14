import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../../services/sharedData.service';

@Component({
  selector: 'app-rectangle1',
  templateUrl: './rectangle1.component.html',
  styleUrls: ['./rectangle1.component.css'],
})
export class Rectangle1Component implements OnInit, OnDestroy {
  translateAttribute = ``;
  viewableAreaWidth = 500;
  viewableAreaHeight = 500;
  viewBoxAttribute = `0 0 1500 1500`;
  sharedServiceObservable: any;
  sharedServiceObservableZoom: any;


  constructor(private sharedService: SharedService) { }
  ngOnDestroy(): void {
    console.log('unsubscribed');
    this.sharedService.contentReset.emit();
    this.sharedServiceObservable.unsubscribe();
    this.sharedServiceObservableZoom.unsubscribe();   
  }
  ngOnInit(): void {  

    // this.sharedServiceObservable = this.sharedService.sharedMessage.subscribe(
    //   (translationDataStr) => {
    //     console.log(translationDataStr);

    //     let translationData = JSON.parse(translationDataStr);
    //     this.viewableAreaWidth = translationData.viewableAreaWidth;
    //     this.viewableAreaHeight = translationData.viewableAreaHeight;
    //     this.translateAttribute = translationData.translateAttribute;
    //     this.viewBoxAttribute = translationData.viewBoxAttribute;
    //   }
    // );

    // this.sharedServiceObservableZoom = this.sharedService.zoomSharedMessage.subscribe(
    //   (zoomdata) => {
    //     console.log(zoomdata);

    //     let zoomdataObj = JSON.parse(zoomdata);

    //     this.translateAttribute = zoomdataObj.translateAttribute;
    //     this.viewBoxAttribute = zoomdataObj.viewBoxAttribute;
    //     this.viewableAreaWidth = zoomdataObj.viewableAreaWidth;
    //     this.viewableAreaHeight = zoomdataObj.viewableAreaHeight;
    //   }
    // );

    this.sharedServiceObservable = this.sharedService.contentCentered.subscribe(
      (translationDataStr) => {
        console.log(translationDataStr);

          let translationData = JSON.parse(translationDataStr);
        this.viewableAreaWidth = translationData.viewableAreaWidth;
        this.viewableAreaHeight = translationData.viewableAreaHeight;
        this.translateAttribute = translationData.translateAttribute;
        this.viewBoxAttribute = translationData.viewBoxAttribute;
      }
    );

    this.sharedServiceObservableZoom = this.sharedService.contentZoomed.subscribe(
      (zoomdata) => {
        console.log(zoomdata);

        let zoomdataObj = JSON.parse(zoomdata);

        this.translateAttribute = zoomdataObj.translateAttribute;
        this.viewBoxAttribute = zoomdataObj.viewBoxAttribute;
        this.viewableAreaWidth = zoomdataObj.viewableAreaWidth;
        this.viewableAreaHeight = zoomdataObj.viewableAreaHeight;
      }
    );
  }
}
