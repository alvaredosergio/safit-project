import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Abd2Page } from './abd2.page';

const routes: Routes = [
  {
    path: '',
    component: Abd2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Abd2PageRoutingModule {}
