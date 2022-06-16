import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Esp4PageRoutingModule } from './esp4-routing.module';

import { Esp4Page } from './esp4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Esp4PageRoutingModule
  ],
  declarations: [Esp4Page]
})
export class Esp4PageModule {}
