import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReportEngineComponent } from './components/report-engine/report-engine.component';
import { HttpdataService } from './services/httpdata.service';
import { StaticCircleComponent } from './components/report-engine/static-circle/static-circle.component';
import { StaticRectangleComponent } from './components/report-engine/static-rectangle/static-rectangle.component';
import { CenterdynamicComponent } from './components/report-engine/centerdynamic/centerdynamic.component';
import { StaticEllipseComponent } from './components/report-engine/static-ellipse/static-ellipse.component';

@NgModule({
  declarations: [AppComponent, ReportEngineComponent,StaticCircleComponent,StaticRectangleComponent,CenterdynamicComponent, StaticEllipseComponent ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpdataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
