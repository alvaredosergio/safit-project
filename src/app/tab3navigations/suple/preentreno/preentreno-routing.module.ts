import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreentrenoPage } from './preentreno.page';

const routes: Routes = [
  {
    path: '',
    component: PreentrenoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreentrenoPageRoutingModule {}
