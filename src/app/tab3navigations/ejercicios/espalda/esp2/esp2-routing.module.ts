import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Esp2Page } from './esp2.page';

const routes: Routes = [
  {
    path: '',
    component: Esp2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Esp2PageRoutingModule {}
