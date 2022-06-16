import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Abd3Page } from './abd3.page';

const routes: Routes = [
  {
    path: '',
    component: Abd3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Abd3PageRoutingModule {}
