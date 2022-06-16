import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PppesoPageRoutingModule } from './pppeso-routing.module';

import { PppesoPage } from './pppeso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PppesoPageRoutingModule
  ],
  declarations: [PppesoPage]
})
export class PppesoPageModule {}
