import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HormonaPageRoutingModule } from './hormona-routing.module';

import { HormonaPage } from './hormona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HormonaPageRoutingModule
  ],
  declarations: [HormonaPage]
})
export class HormonaPageModule {}
