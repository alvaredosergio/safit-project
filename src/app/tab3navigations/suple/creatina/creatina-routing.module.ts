import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatinaPage } from './creatina.page';

const routes: Routes = [
  {
    path: '',
    component: CreatinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatinaPageRoutingModule {}
