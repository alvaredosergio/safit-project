import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ant3Page } from './ant3.page';

const routes: Routes = [
  {
    path: '',
    component: Ant3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ant3PageRoutingModule {}
