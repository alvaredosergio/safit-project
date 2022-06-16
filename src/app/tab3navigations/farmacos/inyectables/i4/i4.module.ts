import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { I4PageRoutingModule } from './i4-routing.module';

import { I4Page } from './i4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    I4PageRoutingModule
  ],
  declarations: [I4Page]
})
export class I4PageModule {}
