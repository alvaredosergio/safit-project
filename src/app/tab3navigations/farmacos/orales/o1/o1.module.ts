import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { O1PageRoutingModule } from './o1-routing.module';

import { O1Page } from './o1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    O1PageRoutingModule
  ],
  declarations: [O1Page]
})
export class O1PageModule {}
