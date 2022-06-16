import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { La4Page } from './la4.page';

const routes: Routes = [
  {
    path: '',
    component: La4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class La4PageRoutingModule {}
