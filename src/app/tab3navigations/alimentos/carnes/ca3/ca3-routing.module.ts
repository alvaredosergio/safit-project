import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ca3Page } from './ca3.page';

const routes: Routes = [
  {
    path: '',
    component: Ca3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ca3PageRoutingModule {}
