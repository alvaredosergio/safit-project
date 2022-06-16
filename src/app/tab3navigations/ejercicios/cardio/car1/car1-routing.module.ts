import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Car1Page } from './car1.page';

const routes: Routes = [
  {
    path: '',
    component: Car1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Car1PageRoutingModule {}
