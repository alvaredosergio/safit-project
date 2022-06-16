import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ca4PageRoutingModule } from './ca4-routing.module';

import { Ca4Page } from './ca4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ca4PageRoutingModule
  ],
  declarations: [Ca4Page]
})
export class Ca4PageModule {}
