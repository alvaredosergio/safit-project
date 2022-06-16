import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pe2PageRoutingModule } from './pe2-routing.module';

import { Pe2Page } from './pe2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pe2PageRoutingModule
  ],
  declarations: [Pe2Page]
})
export class Pe2PageModule {}
