import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ant2PageRoutingModule } from './ant2-routing.module';

import { Ant2Page } from './ant2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ant2PageRoutingModule
  ],
  declarations: [Ant2Page]
})
export class Ant2PageModule {}
