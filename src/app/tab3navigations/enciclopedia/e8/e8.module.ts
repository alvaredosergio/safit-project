import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E8PageRoutingModule } from './e8-routing.module';

import { E8Page } from './e8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E8PageRoutingModule
  ],
  declarations: [E8Page]
})
export class E8PageModule {}
