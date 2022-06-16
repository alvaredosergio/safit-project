import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hom1Page } from './hom1.page';

const routes: Routes = [
  {
    path: '',
    component: Hom1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hom1PageRoutingModule {}
