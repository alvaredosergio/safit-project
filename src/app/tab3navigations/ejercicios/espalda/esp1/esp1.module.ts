import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Esp1PageRoutingModule } from './esp1-routing.module';

import { Esp1Page } from './esp1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Esp1PageRoutingModule
  ],
  declarations: [Esp1Page]
})
export class Esp1PageModule {}
