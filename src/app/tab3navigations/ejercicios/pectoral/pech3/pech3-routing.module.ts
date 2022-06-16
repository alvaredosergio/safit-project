import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pech3Page } from './pech3.page';

const routes: Routes = [
  {
    path: '',
    component: Pech3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pech3PageRoutingModule {}
