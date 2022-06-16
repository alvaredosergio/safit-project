import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pech2Page } from './pech2.page';

const routes: Routes = [
  {
    path: '',
    component: Pech2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pech2PageRoutingModule {}
