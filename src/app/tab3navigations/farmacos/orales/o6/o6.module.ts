import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { O6PageRoutingModule } from './o6-routing.module';

import { O6Page } from './o6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    O6PageRoutingModule
  ],
  declarations: [O6Page]
})
export class O6PageModule {}
