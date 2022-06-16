import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fru2PageRoutingModule } from './fru2-routing.module';

import { Fru2Page } from './fru2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fru2PageRoutingModule
  ],
  declarations: [Fru2Page]
})
export class Fru2PageModule {}
