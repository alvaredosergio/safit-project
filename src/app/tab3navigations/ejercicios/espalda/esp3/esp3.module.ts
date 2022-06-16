import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Esp3PageRoutingModule } from './esp3-routing.module';

import { Esp3Page } from './esp3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Esp3PageRoutingModule
  ],
  declarations: [Esp3Page]
})
export class Esp3PageModule {}
