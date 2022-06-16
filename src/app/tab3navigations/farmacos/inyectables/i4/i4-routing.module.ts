import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { I4Page } from './i4.page';

const routes: Routes = [
  {
    path: '',
    component: I4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class I4PageRoutingModule {}
