import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Car2Page } from './car2.page';

const routes: Routes = [
  {
    path: '',
    component: Car2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Car2PageRoutingModule {}
