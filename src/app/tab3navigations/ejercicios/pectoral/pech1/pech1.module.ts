import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pech1PageRoutingModule } from './pech1-routing.module';

import { Pech1Page } from './pech1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pech1PageRoutingModule
  ],
  declarations: [Pech1Page]
})
export class Pech1PageModule {}
