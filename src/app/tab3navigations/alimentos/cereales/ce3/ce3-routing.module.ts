import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ce3Page } from './ce3.page';

const routes: Routes = [
  {
    path: '',
    component: Ce3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ce3PageRoutingModule {}
