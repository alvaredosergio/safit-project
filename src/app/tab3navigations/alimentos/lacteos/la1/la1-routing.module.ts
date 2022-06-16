import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { La1Page } from './la1.page';

const routes: Routes = [
  {
    path: '',
    component: La1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class La1PageRoutingModule {}
