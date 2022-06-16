import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VitaminasPageRoutingModule } from './vitaminas-routing.module';

import { VitaminasPage } from './vitaminas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VitaminasPageRoutingModule
  ],
  declarations: [VitaminasPage]
})
export class VitaminasPageModule {}
