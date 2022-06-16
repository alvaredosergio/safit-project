import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ca1PageRoutingModule } from './ca1-routing.module';

import { Ca1Page } from './ca1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ca1PageRoutingModule
  ],
  declarations: [Ca1Page]
})
export class Ca1PageModule {}
