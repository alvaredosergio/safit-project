import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hom4Page } from './hom4.page';

const routes: Routes = [
  {
    path: '',
    component: Hom4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hom4PageRoutingModule {}
