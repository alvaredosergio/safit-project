import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ca2PageRoutingModule } from './ca2-routing.module';

import { Ca2Page } from './ca2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ca2PageRoutingModule
  ],
  declarations: [Ca2Page]
})
export class Ca2PageModule {}
