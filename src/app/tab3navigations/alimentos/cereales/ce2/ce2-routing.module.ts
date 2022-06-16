import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ce2Page } from './ce2.page';

const routes: Routes = [
  {
    path: '',
    component: Ce2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ce2PageRoutingModule {}
