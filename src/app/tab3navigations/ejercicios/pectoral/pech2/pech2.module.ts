import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pech2PageRoutingModule } from './pech2-routing.module';

import { Pech2Page } from './pech2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pech2PageRoutingModule
  ],
  declarations: [Pech2Page]
})
export class Pech2PageModule {}
