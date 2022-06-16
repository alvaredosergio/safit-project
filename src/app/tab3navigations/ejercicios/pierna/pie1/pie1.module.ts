import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pie1PageRoutingModule } from './pie1-routing.module';

import { Pie1Page } from './pie1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pie1PageRoutingModule
  ],
  declarations: [Pie1Page]
})
export class Pie1PageModule {}
