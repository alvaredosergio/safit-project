import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ce3PageRoutingModule } from './ce3-routing.module';

import { Ce3Page } from './ce3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ce3PageRoutingModule
  ],
  declarations: [Ce3Page]
})
export class Ce3PageModule {}
