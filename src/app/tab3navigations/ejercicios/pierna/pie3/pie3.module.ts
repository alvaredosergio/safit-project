import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pie3PageRoutingModule } from './pie3-routing.module';

import { Pie3Page } from './pie3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pie3PageRoutingModule
  ],
  declarations: [Pie3Page]
})
export class Pie3PageModule {}
