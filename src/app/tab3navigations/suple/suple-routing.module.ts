import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuplePage } from './suple.page';

const routes: Routes = [
  {
    path: '',
    component: SuplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuplePageRoutingModule {}
