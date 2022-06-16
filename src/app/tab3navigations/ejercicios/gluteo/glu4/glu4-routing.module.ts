import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Glu4Page } from './glu4.page';

const routes: Routes = [
  {
    path: '',
    component: Glu4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Glu4PageRoutingModule {}
