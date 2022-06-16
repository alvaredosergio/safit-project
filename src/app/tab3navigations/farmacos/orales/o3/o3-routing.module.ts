import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { O3Page } from './o3.page';

const routes: Routes = [
  {
    path: '',
    component: O3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class O3PageRoutingModule {}
