import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pe3Page } from './pe3.page';

const routes: Routes = [
  {
    path: '',
    component: Pe3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pe3PageRoutingModule {}
