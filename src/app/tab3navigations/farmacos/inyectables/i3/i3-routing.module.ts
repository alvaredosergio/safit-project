import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { I3Page } from './i3.page';

const routes: Routes = [
  {
    path: '',
    component: I3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class I3PageRoutingModule {}
