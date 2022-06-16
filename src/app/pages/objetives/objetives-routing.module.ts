import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjetivesPage } from './objetives.page';

const routes: Routes = [
  {
    path: '',
    component: ObjetivesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjetivesPageRoutingModule {}
