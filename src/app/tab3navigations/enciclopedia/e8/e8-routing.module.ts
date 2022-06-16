import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E8Page } from './e8.page';

const routes: Routes = [
  {
    path: '',
    component: E8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E8PageRoutingModule {}
