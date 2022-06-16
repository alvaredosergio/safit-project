import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProteinaPageRoutingModule } from './proteina-routing.module';

import { ProteinaPage } from './proteina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProteinaPageRoutingModule
  ],
  declarations: [ProteinaPage]
})
export class ProteinaPageModule {}
