import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Glu3PageRoutingModule } from './glu3-routing.module';

import { Glu3Page } from './glu3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Glu3PageRoutingModule
  ],
  declarations: [Glu3Page]
})
export class Glu3PageModule {}
