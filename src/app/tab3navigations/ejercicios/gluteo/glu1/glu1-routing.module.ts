import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Glu1Page } from './glu1.page';

const routes: Routes = [
  {
    path: '',
    component: Glu1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Glu1PageRoutingModule {}
