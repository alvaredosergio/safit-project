import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fru1PageRoutingModule } from './fru1-routing.module';

import { Fru1Page } from './fru1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fru1PageRoutingModule
  ],
  declarations: [Fru1Page]
})
export class Fru1PageModule {}
