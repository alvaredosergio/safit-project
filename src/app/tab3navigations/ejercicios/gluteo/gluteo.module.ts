import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GluteoPageRoutingModule } from './gluteo-routing.module';

import { GluteoPage } from './gluteo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GluteoPageRoutingModule
  ],
  declarations: [GluteoPage]
})
export class GluteoPageModule {}
