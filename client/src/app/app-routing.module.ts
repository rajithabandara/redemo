import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportEngineComponent } from './components/report-engine/report-engine.component';
import { Rectangle1Component } from './components/report-engine/rectangle1/rectangle1.component';
import { Rectangle2Component } from './components/report-engine/rectangle2/rectangle2.component';
import { Rectangle3Component } from './components/report-engine/rectangle3/rectangle3.component';
import { Rectangle4Component } from './components/report-engine/rectangle4/rectangle4.component';


const routes: Routes = [
  { path: 'reportengine', component: ReportEngineComponent,
  children:[
    { path: 'rectangle1', component: Rectangle1Component },
    { path: 'rectangle2', component: Rectangle2Component },
    { path: 'rectangle3', component: Rectangle3Component },
    { path: 'rectangle4', component: Rectangle4Component },
  ] },

  // { path: 'reportengine/:id', component: ReportEngineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
