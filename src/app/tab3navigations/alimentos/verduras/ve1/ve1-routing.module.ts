import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ve1Page } from './ve1.page';

const routes: Routes = [
  {
    path: '',
    component: Ve1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ve1PageRoutingModule {}
