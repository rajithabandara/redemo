import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedigreeComponent } from './pedigree/pedigree.component';

const routes: Routes = [{ path: 'reportengine', component: PedigreeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
