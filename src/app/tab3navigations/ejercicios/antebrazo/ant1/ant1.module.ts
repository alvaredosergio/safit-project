import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ant1PageRoutingModule } from './ant1-routing.module';

import { Ant1Page } from './ant1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ant1PageRoutingModule
  ],
  declarations: [Ant1Page]
})
export class Ant1PageModule {}
