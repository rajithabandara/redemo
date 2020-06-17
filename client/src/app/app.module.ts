import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportEngineComponent } from './report-engine/report-engine.component';
import { SvgcircleComponent } from './components/svgcircle/svgcircle.component';
import { PlainSvgComponent } from './components/plain-svg/plain-svg.component';


import { SvgrectComponent } from './components/svgrect/svgrect.component';
import { SvgelipseComponent } from './components/svgelipse/svgelipse.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportEngineComponent,
    SvgcircleComponent,
    PlainSvgComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SvgrectComponent,
    SvgelipseComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
