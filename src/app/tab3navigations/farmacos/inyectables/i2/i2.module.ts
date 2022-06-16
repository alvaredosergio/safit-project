import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { I2PageRoutingModule } from './i2-routing.module';

import { I2Page } from './i2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    I2PageRoutingModule
  ],
  declarations: [I2Page]
})
export class I2PageModule {}
