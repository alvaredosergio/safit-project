import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Car2PageRoutingModule } from './car2-routing.module';

import { Car2Page } from './car2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Car2PageRoutingModule
  ],
  declarations: [Car2Page]
})
export class Car2PageModule {}
