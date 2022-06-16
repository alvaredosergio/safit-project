import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { I5Page } from './i5.page';

const routes: Routes = [
  {
    path: '',
    component: I5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class I5PageRoutingModule {}
