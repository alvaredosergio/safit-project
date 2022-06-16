import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bic4Page } from './bic4.page';

const routes: Routes = [
  {
    path: '',
    component: Bic4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bic4PageRoutingModule {}
