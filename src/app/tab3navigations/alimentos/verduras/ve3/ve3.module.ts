import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ve3PageRoutingModule } from './ve3-routing.module';

import { Ve3Page } from './ve3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ve3PageRoutingModule
  ],
  declarations: [Ve3Page]
})
export class Ve3PageModule {}
