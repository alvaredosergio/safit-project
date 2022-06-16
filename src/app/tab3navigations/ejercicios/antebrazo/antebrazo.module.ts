import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntebrazoPageRoutingModule } from './antebrazo-routing.module';

import { AntebrazoPage } from './antebrazo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntebrazoPageRoutingModule
  ],
  declarations: [AntebrazoPage]
})
export class AntebrazoPageModule {}
