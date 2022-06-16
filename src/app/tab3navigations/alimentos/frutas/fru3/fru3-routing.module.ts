import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fru3Page } from './fru3.page';

const routes: Routes = [
  {
    path: '',
    component: Fru3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fru3PageRoutingModule {}
