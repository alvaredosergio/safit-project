import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bic2PageRoutingModule } from './bic2-routing.module';

import { Bic2Page } from './bic2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bic2PageRoutingModule
  ],
  declarations: [Bic2Page]
})
export class Bic2PageModule {}
