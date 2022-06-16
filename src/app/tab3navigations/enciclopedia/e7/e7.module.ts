import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E7PageRoutingModule } from './e7-routing.module';

import { E7Page } from './e7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E7PageRoutingModule
  ],
  declarations: [E7Page]
})
export class E7PageModule {}
