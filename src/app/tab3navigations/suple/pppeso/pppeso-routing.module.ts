import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PppesoPage } from './pppeso.page';

const routes: Routes = [
  {
    path: '',
    component: PppesoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PppesoPageRoutingModule {}
