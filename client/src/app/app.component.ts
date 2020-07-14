import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/sharedData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  public themeId: number;

  constructor(private _shareService: SharedService) {
    
  }
  ngOnInit(){
    this.themeId = -1;
  }

  selectStyle() {  
    this._shareService.themePublished.emit(this.themeId);
  }
}

