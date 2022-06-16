import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Glu2PageRoutingModule } from './glu2-routing.module';

import { Glu2Page } from './glu2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Glu2PageRoutingModule
  ],
  declarations: [Glu2Page]
})
export class Glu2PageModule {}
