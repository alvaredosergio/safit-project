import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E10Page } from './e10.page';

const routes: Routes = [
  {
    path: '',
    component: E10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E10PageRoutingModule {}
