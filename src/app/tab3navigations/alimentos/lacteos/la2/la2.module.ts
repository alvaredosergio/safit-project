import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { La2PageRoutingModule } from './la2-routing.module';

import { La2Page } from './la2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    La2PageRoutingModule
  ],
  declarations: [La2Page]
})
export class La2PageModule {}
