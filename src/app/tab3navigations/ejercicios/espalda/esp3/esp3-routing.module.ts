import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Esp3Page } from './esp3.page';

const routes: Routes = [
  {
    path: '',
    component: Esp3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Esp3PageRoutingModule {}
