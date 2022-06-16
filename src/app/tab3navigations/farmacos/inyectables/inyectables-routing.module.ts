import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InyectablesPage } from './inyectables.page';

const routes: Routes = [
  {
    path: '',
    component: InyectablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InyectablesPageRoutingModule {}
