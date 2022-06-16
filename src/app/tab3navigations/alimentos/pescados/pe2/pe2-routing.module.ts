import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pe2Page } from './pe2.page';

const routes: Routes = [
  {
    path: '',
    component: Pe2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pe2PageRoutingModule {}
