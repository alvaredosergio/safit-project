import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { O7Page } from './o7.page';

const routes: Routes = [
  {
    path: '',
    component: O7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class O7PageRoutingModule {}
