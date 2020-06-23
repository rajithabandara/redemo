import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportEngineComponent } from './components/report-engine/report-engine.component';
import { CenterdynamicComponent } from './components/centerdyanamic/centerdyanamic.component';

const routes: Routes = [
  { path: 'reportengine/:id', component: ReportEngineComponent },
  { path: 'centerdemo', component: CenterdynamicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
