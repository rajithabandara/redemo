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
import { DynamicCirclesComponent } from './components/report-engine/dynamic-circles/dynamic-circles.component';
import { DynamicRectanglesComponent } from './components/report-engine/dynamic-rectangles/dynamic-rectangles.component';
import { DynamicEllipseComponent } from './components/report-engine/dynamic-ellipse/dynamic-ellipse.component';
import { DynamicPolygonComponent } from './components/report-engine/dynamic-polygon/dynamic-polygon.component';
import { Dynamiccomp1Component } from './components/report-engine/dynamiccomp1/dynamiccomp1.component';
import { Dynamiccomp2Component } from './components/report-engine/dynamiccomp2/dynamiccomp2.component';
import { DynamicviewrefDirective } from './directives/dynamicviewref.directive';
import { DynamicloaderComponent } from './components/report-engine/dynamicloader/dynamicloader.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportEngineComponent,
    Rectangle1Component,
    Rectangle2Component,
    Rectangle4Component,
    Rectangle3Component,
    DynamicCirclesComponent,
    DynamicRectanglesComponent,
    DynamicEllipseComponent,
    DynamicPolygonComponent,
    Dynamiccomp1Component,
    Dynamiccomp2Component,
    DynamicviewrefDirective,
    DynamicloaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
