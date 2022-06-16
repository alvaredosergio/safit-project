import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E6Page } from './e6.page';

const routes: Routes = [
  {
    path: '',
    component: E6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E6PageRoutingModule {}
