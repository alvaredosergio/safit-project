import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { O4PageRoutingModule } from './o4-routing.module';

import { O4Page } from './o4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    O4PageRoutingModule
  ],
  declarations: [O4Page]
})
export class O4PageModule {}
