import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { O1Page } from './o1.page';

const routes: Routes = [
  {
    path: '',
    component: O1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class O1PageRoutingModule {}
