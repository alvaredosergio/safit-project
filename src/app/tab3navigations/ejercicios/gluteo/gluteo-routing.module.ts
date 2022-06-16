import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GluteoPage } from './gluteo.page';

const routes: Routes = [
  {
    path: '',
    component: GluteoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GluteoPageRoutingModule {}
