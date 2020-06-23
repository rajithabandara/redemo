import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportEngineComponent } from './components/report-engine/report-engine.component';
import { CenterdemoComponent } from './components/centerdemo/centerdemo.component';

const routes: Routes = [
  { path: 'reportengine/:id', component: ReportEngineComponent },
  // { path: 'centerdemo', component: CenterdemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
