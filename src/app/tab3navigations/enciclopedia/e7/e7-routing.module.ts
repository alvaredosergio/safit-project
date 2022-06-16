import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E7Page } from './e7.page';

const routes: Routes = [
  {
    path: '',
    component: E7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E7PageRoutingModule {}
