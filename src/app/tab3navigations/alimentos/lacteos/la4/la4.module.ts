import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { La4PageRoutingModule } from './la4-routing.module';

import { La4Page } from './la4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    La4PageRoutingModule
  ],
  declarations: [La4Page]
})
export class La4PageModule {}
