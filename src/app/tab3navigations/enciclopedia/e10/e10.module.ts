import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E10PageRoutingModule } from './e10-routing.module';

import { E10Page } from './e10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E10PageRoutingModule
  ],
  declarations: [E10Page]
})
export class E10PageModule {}
