import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fru2Page } from './fru2.page';

const routes: Routes = [
  {
    path: '',
    component: Fru2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fru2PageRoutingModule {}
