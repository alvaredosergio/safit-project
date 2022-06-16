import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E9PageRoutingModule } from './e9-routing.module';

import { E9Page } from './e9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E9PageRoutingModule
  ],
  declarations: [E9Page]
})
export class E9PageModule {}
