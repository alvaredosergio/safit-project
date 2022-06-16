import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pie2PageRoutingModule } from './pie2-routing.module';

import { Pie2Page } from './pie2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pie2PageRoutingModule
  ],
  declarations: [Pie2Page]
})
export class Pie2PageModule {}
