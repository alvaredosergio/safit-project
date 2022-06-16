import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tri2Page } from './tri2.page';

const routes: Routes = [
  {
    path: '',
    component: Tri2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tri2PageRoutingModule {}
