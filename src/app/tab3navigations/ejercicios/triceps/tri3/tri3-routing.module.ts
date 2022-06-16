import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tri3Page } from './tri3.page';

const routes: Routes = [
  {
    path: '',
    component: Tri3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tri3PageRoutingModule {}
