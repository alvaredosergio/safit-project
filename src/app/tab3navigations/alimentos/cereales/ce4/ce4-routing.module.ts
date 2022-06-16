import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ce4Page } from './ce4.page';

const routes: Routes = [
  {
    path: '',
    component: Ce4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ce4PageRoutingModule {}
