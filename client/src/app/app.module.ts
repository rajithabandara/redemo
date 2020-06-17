import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportEngineComponent } from './report-engine/report-engine.component';
import { SvgcircleComponent } from './components/svgcircle/svgcircle.component';
import { PlainSvgComponent } from './components/plain-svg/plain-svg.component';



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

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
