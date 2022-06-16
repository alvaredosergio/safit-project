import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fru3PageRoutingModule } from './fru3-routing.module';

import { Fru3Page } from './fru3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fru3PageRoutingModule
  ],
  declarations: [Fru3Page]
})
export class Fru3PageModule {}
