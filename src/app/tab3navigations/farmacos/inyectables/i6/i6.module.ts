import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { I6PageRoutingModule } from './i6-routing.module';

import { I6Page } from './i6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    I6PageRoutingModule
  ],
  declarations: [I6Page]
})
export class I6PageModule {}
