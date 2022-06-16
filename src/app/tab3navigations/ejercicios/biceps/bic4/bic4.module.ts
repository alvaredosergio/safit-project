import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bic4PageRoutingModule } from './bic4-routing.module';

import { Bic4Page } from './bic4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bic4PageRoutingModule
  ],
  declarations: [Bic4Page]
})
export class Bic4PageModule {}
