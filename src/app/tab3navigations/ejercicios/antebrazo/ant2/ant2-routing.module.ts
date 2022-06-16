import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ant2Page } from './ant2.page';

const routes: Routes = [
  {
    path: '',
    component: Ant2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ant2PageRoutingModule {}
