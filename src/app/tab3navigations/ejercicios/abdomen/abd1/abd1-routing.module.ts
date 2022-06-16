import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Abd1Page } from './abd1.page';

const routes: Routes = [
  {
    path: '',
    component: Abd1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Abd1PageRoutingModule {}
