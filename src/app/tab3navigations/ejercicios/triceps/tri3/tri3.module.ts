import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tri3PageRoutingModule } from './tri3-routing.module';

import { Tri3Page } from './tri3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tri3PageRoutingModule
  ],
  declarations: [Tri3Page]
})
export class Tri3PageModule {}
