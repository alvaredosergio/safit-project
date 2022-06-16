import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OralesPage } from './orales.page';

const routes: Routes = [
  {
    path: '',
    component: OralesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OralesPageRoutingModule {}
