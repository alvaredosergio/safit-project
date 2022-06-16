import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VitaminasPage } from './vitaminas.page';

const routes: Routes = [
  {
    path: '',
    component: VitaminasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VitaminasPageRoutingModule {}
