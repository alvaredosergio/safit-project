import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pie4PageRoutingModule } from './pie4-routing.module';

import { Pie4Page } from './pie4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pie4PageRoutingModule
  ],
  declarations: [Pie4Page]
})
export class Pie4PageModule {}
