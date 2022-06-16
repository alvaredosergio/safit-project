import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pie4Page } from './pie4.page';

const routes: Routes = [
  {
    path: '',
    component: Pie4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pie4PageRoutingModule {}
