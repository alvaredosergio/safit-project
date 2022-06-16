import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tri4Page } from './tri4.page';

const routes: Routes = [
  {
    path: '',
    component: Tri4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tri4PageRoutingModule {}
