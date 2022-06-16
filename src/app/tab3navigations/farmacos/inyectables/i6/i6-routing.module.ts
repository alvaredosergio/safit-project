import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { I6Page } from './i6.page';

const routes: Routes = [
  {
    path: '',
    component: I6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class I6PageRoutingModule {}
