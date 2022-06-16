import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pe1Page } from './pe1.page';

const routes: Routes = [
  {
    path: '',
    component: Pe1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pe1PageRoutingModule {}
