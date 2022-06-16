import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E4Page } from './e4.page';

const routes: Routes = [
  {
    path: '',
    component: E4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E4PageRoutingModule {}
