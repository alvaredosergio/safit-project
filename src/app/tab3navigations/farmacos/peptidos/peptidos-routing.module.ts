import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeptidosPage } from './peptidos.page';

const routes: Routes = [
  {
    path: '',
    component: PeptidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeptidosPageRoutingModule {}
