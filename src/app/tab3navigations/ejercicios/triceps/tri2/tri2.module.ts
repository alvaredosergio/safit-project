import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tri2PageRoutingModule } from './tri2-routing.module';

import { Tri2Page } from './tri2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tri2PageRoutingModule
  ],
  declarations: [Tri2Page]
})
export class Tri2PageModule {}
