import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Glu2Page } from './glu2.page';

const routes: Routes = [
  {
    path: '',
    component: Glu2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Glu2PageRoutingModule {}
