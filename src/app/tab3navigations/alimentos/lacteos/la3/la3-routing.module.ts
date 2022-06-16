import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { La3Page } from './la3.page';

const routes: Routes = [
  {
    path: '',
    component: La3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class La3PageRoutingModule {}
