import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { O5Page } from './o5.page';

const routes: Routes = [
  {
    path: '',
    component: O5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class O5PageRoutingModule {}
