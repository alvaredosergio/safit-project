import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ce4PageRoutingModule } from './ce4-routing.module';

import { Ce4Page } from './ce4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ce4PageRoutingModule
  ],
  declarations: [Ce4Page]
})
export class Ce4PageModule {}
