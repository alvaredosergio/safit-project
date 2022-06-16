import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarnitinaPageRoutingModule } from './carnitina-routing.module';

import { CarnitinaPage } from './carnitina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarnitinaPageRoutingModule
  ],
  declarations: [CarnitinaPage]
})
export class CarnitinaPageModule {}
