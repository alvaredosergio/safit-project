import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hom2Page } from './hom2.page';

const routes: Routes = [
  {
    path: '',
    component: Hom2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hom2PageRoutingModule {}
