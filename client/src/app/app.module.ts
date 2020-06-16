import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlainSvgComponent } from './components/plain-svg/plain-svg.component';
import { CirclesComponent } from './components/circles/circles.component';
import { RetanglesComponent } from './components/retangles/retangles.component';
import { EllipseComponent } from './components/ellipse/ellipse.component';

@NgModule({
  declarations: [
    AppComponent,
    PlainSvgComponent,
    CirclesComponent,
    RetanglesComponent,
    EllipseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
