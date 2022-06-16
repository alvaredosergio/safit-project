import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ce1PageRoutingModule } from './ce1-routing.module';

import { Ce1Page } from './ce1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ce1PageRoutingModule
  ],
  declarations: [Ce1Page]
})
export class Ce1PageModule {}
