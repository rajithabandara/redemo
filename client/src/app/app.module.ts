import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReportEngineComponent } from './components/report-engine/report-engine.component';
import { SharedService } from './services/sharedData.service';
import { Rectangle1Component } from './components/report-engine/rectangle1/rectangle1.component';
import { Rectangle2Component } from './components/report-engine/rectangle2/rectangle2.component';

import { Rectangle4Component } from './components/report-engine/rectangle4/rectangle4.component';
import { Rectangle3Component } from './components/report-engine/rectangle3/rectangle3.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportEngineComponent,
    Rectangle1Component,
    Rectangle2Component,
    Rectangle4Component,
    Rectangle3Component,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
