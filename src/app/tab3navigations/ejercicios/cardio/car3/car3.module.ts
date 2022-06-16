import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Car3PageRoutingModule } from './car3-routing.module';

import { Car3Page } from './car3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Car3PageRoutingModule
  ],
  declarations: [Car3Page]
})
export class Car3PageModule {}
