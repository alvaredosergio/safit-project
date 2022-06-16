import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Esp1Page } from './esp1.page';

const routes: Routes = [
  {
    path: '',
    component: Esp1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Esp1PageRoutingModule {}
