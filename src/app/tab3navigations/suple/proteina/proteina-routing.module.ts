import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProteinaPage } from './proteina.page';

const routes: Routes = [
  {
    path: '',
    component: ProteinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProteinaPageRoutingModule {}
