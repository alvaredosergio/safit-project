import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E9Page } from './e9.page';

const routes: Routes = [
  {
    path: '',
    component: E9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E9PageRoutingModule {}
