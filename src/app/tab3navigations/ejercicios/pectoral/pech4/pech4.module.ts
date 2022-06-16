import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pech4PageRoutingModule } from './pech4-routing.module';

import { Pech4Page } from './pech4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pech4PageRoutingModule
  ],
  declarations: [Pech4Page]
})
export class Pech4PageModule {}
