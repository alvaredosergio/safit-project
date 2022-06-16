import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { O2PageRoutingModule } from './o2-routing.module';

import { O2Page } from './o2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    O2PageRoutingModule
  ],
  declarations: [O2Page]
})
export class O2PageModule {}
