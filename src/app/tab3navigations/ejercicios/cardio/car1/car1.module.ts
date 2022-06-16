import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Car1PageRoutingModule } from './car1-routing.module';

import { Car1Page } from './car1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Car1PageRoutingModule
  ],
  declarations: [Car1Page]
})
export class Car1PageModule {}
