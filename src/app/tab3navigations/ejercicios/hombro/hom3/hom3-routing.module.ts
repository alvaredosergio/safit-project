import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hom3Page } from './hom3.page';

const routes: Routes = [
  {
    path: '',
    component: Hom3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hom3PageRoutingModule {}
