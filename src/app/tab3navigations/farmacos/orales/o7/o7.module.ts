import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { O7PageRoutingModule } from './o7-routing.module';

import { O7Page } from './o7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    O7PageRoutingModule
  ],
  declarations: [O7Page]
})
export class O7PageModule {}
