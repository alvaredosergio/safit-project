import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ce1Page } from './ce1.page';

const routes: Routes = [
  {
    path: '',
    component: Ce1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ce1PageRoutingModule {}
