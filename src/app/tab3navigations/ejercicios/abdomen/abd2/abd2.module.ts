import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Abd2PageRoutingModule } from './abd2-routing.module';

import { Abd2Page } from './abd2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Abd2PageRoutingModule
  ],
  declarations: [Abd2Page]
})
export class Abd2PageModule {}
