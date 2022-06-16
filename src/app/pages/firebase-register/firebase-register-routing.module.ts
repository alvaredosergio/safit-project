import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebaseRegisterPage } from './firebase-register.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaseRegisterPageRoutingModule {}
