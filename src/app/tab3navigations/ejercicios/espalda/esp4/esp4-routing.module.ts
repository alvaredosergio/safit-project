import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Esp4Page } from './esp4.page';

const routes: Routes = [
  {
    path: '',
    component: Esp4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Esp4PageRoutingModule {}
