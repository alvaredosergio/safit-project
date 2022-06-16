import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ve2Page } from './ve2.page';

const routes: Routes = [
  {
    path: '',
    component: Ve2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ve2PageRoutingModule {}
