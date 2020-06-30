import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportEngineComponent } from './components/report-engine/report-engine.component';
import { PlainSvgComponent } from './components/plain-svg/plain-svg.component';
import { SvgcircleComponent } from './components/svgcircle/svgcircle.component';
import { SvgrectComponent } from './components/svgrect/svgrect.component';
import { SvgelipseComponent } from './components/svgelipse/svgelipse.component';

const routes: Routes = [
  { path: 'reportengine', component: ReportEngineComponent,  children:[
    { path: 'Plainsvg', component: PlainSvgComponent },
    { path: 'circles', component:SvgcircleComponent },
    { path: 'rectangles', component:SvgrectComponent },
    { path: 'ellipse', component: SvgelipseComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
