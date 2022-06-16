import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ca4Page } from './ca4.page';

const routes: Routes = [
  {
    path: '',
    component: Ca4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ca4PageRoutingModule {}
