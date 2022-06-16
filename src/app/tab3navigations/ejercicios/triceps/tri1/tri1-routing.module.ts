import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tri1Page } from './tri1.page';

const routes: Routes = [
  {
    path: '',
    component: Tri1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tri1PageRoutingModule {}
