import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bic1Page } from './bic1.page';

const routes: Routes = [
  {
    path: '',
    component: Bic1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bic1PageRoutingModule {}
