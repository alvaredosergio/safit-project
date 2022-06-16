import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Abd4Page } from './abd4.page';

const routes: Routes = [
  {
    path: '',
    component: Abd4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Abd4PageRoutingModule {}
