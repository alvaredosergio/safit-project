import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pie3Page } from './pie3.page';

const routes: Routes = [
  {
    path: '',
    component: Pie3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pie3PageRoutingModule {}
