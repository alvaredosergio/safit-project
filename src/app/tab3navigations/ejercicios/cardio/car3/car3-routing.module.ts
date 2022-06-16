import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Car3Page } from './car3.page';

const routes: Routes = [
  {
    path: '',
    component: Car3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Car3PageRoutingModule {}
