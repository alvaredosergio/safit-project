import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Glu1PageRoutingModule } from './glu1-routing.module';

import { Glu1Page } from './glu1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Glu1PageRoutingModule
  ],
  declarations: [Glu1Page]
})
export class Glu1PageModule {}
