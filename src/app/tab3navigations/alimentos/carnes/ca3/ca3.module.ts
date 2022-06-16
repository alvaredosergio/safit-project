import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ca3PageRoutingModule } from './ca3-routing.module';

import { Ca3Page } from './ca3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ca3PageRoutingModule
  ],
  declarations: [Ca3Page]
})
export class Ca3PageModule {}
