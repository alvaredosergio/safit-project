import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { O2Page } from './o2.page';

const routes: Routes = [
  {
    path: '',
    component: O2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class O2PageRoutingModule {}
