import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ca1Page } from './ca1.page';

const routes: Routes = [
  {
    path: '',
    component: Ca1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ca1PageRoutingModule {}
