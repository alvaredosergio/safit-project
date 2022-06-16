import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ve1PageRoutingModule } from './ve1-routing.module';

import { Ve1Page } from './ve1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ve1PageRoutingModule
  ],
  declarations: [Ve1Page]
})
export class Ve1PageModule {}
