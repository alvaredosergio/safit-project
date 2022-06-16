import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ve2PageRoutingModule } from './ve2-routing.module';

import { Ve2Page } from './ve2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ve2PageRoutingModule
  ],
  declarations: [Ve2Page]
})
export class Ve2PageModule {}
