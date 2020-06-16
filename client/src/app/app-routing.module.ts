import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlainSvgComponent } from './components/plain-svg/plain-svg.component';
import { CirclesComponent } from './components/circles/circles.component';
import { RetanglesComponent } from './components/retangles/retangles.component';
import { EllipseComponent } from './components/ellipse/ellipse.component';

const routes: Routes = [
  { path: 'reportengine/plainsvg', component:PlainSvgComponent},
  { path: 'reportengine/circles', component:CirclesComponent},
   { path: 'reportengine/rectan', component:RetanglesComponent},
    { path: 'reportengine/ellipse', component: EllipseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
