import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ve3Page } from './ve3.page';

const routes: Routes = [
  {
    path: '',
    component: Ve3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ve3PageRoutingModule {}
