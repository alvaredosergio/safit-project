import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bic3Page } from './bic3.page';

const routes: Routes = [
  {
    path: '',
    component: Bic3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bic3PageRoutingModule {}
