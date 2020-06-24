import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReportEngineComponent } from './components/report-engine/report-engine.component';
import { HttpdataService } from './services/httpdata.service';
import { CenterdynamicComponent } from './components/centerdyanamic/centerdyanamic.component';

import { StaticCircleComponent } from './components/static-circle/static-circle.component';
import { StaticRectangleComponent } from './components/static-rectangle/static-rectangle.component';

@NgModule({
  declarations: [AppComponent, ReportEngineComponent, CenterdynamicComponent,StaticCircleComponent ,StaticRectangleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpdataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
