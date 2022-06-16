import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pech1Page } from './pech1.page';

const routes: Routes = [
  {
    path: '',
    component: Pech1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pech1PageRoutingModule {}
