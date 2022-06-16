import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pech4Page } from './pech4.page';

const routes: Routes = [
  {
    path: '',
    component: Pech4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pech4PageRoutingModule {}
