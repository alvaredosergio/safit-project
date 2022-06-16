import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ce2PageRoutingModule } from './ce2-routing.module';

import { Ce2Page } from './ce2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ce2PageRoutingModule
  ],
  declarations: [Ce2Page]
})
export class Ce2PageModule {}
