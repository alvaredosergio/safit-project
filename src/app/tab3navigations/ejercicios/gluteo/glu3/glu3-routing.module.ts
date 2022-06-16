import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Glu3Page } from './glu3.page';

const routes: Routes = [
  {
    path: '',
    component: Glu3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Glu3PageRoutingModule {}
