import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Esp2PageRoutingModule } from './esp2-routing.module';

import { Esp2Page } from './esp2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Esp2PageRoutingModule
  ],
  declarations: [Esp2Page]
})
export class Esp2PageModule {}
