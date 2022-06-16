import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { O6Page } from './o6.page';

const routes: Routes = [
  {
    path: '',
    component: O6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class O6PageRoutingModule {}
