import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntebrazoPage } from './antebrazo.page';

const routes: Routes = [
  {
    path: '',
    component: AntebrazoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntebrazoPageRoutingModule {}
