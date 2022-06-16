import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Glu4PageRoutingModule } from './glu4-routing.module';

import { Glu4Page } from './glu4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Glu4PageRoutingModule
  ],
  declarations: [Glu4Page]
})
export class Glu4PageModule {}
