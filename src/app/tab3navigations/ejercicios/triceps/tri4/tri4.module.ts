import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tri4PageRoutingModule } from './tri4-routing.module';

import { Tri4Page } from './tri4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tri4PageRoutingModule
  ],
  declarations: [Tri4Page]
})
export class Tri4PageModule {}
