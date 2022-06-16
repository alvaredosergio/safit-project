import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pe3PageRoutingModule } from './pe3-routing.module';

import { Pe3Page } from './pe3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pe3PageRoutingModule
  ],
  declarations: [Pe3Page]
})
export class Pe3PageModule {}
