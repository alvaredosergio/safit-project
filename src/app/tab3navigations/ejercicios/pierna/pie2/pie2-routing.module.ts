import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pie2Page } from './pie2.page';

const routes: Routes = [
  {
    path: '',
    component: Pie2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pie2PageRoutingModule {}
