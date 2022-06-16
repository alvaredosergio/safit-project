import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ca2Page } from './ca2.page';

const routes: Routes = [
  {
    path: '',
    component: Ca2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ca2PageRoutingModule {}
