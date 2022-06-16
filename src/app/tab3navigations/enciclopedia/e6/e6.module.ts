import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E6PageRoutingModule } from './e6-routing.module';

import { E6Page } from './e6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E6PageRoutingModule
  ],
  declarations: [E6Page]
})
export class E6PageModule {}
