import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hom4PageRoutingModule } from './hom4-routing.module';

import { Hom4Page } from './hom4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hom4PageRoutingModule
  ],
  declarations: [Hom4Page]
})
export class Hom4PageModule {}
