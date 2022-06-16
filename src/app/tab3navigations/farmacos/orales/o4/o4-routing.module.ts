import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { O4Page } from './o4.page';

const routes: Routes = [
  {
    path: '',
    component: O4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class O4PageRoutingModule {}
