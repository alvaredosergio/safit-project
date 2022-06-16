import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ant1Page } from './ant1.page';

const routes: Routes = [
  {
    path: '',
    component: Ant1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ant1PageRoutingModule {}
