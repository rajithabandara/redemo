import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReportEngineComponent } from './components/report-engine/report-engine.component';
import { HttpdataService } from './services/httpdata.service';

@NgModule({
  declarations: [AppComponent, ReportEngineComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpdataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
