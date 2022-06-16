import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AminoacidosPage } from './aminoacidos.page';

const routes: Routes = [
  {
    path: '',
    component: AminoacidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AminoacidosPageRoutingModule {}
