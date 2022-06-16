import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { La2Page } from './la2.page';

const routes: Routes = [
  {
    path: '',
    component: La2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class La2PageRoutingModule {}
