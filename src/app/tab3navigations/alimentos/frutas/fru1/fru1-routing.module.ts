import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fru1Page } from './fru1.page';

const routes: Routes = [
  {
    path: '',
    component: Fru1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fru1PageRoutingModule {}
