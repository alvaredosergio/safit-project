import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { O3PageRoutingModule } from './o3-routing.module';

import { O3Page } from './o3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    O3PageRoutingModule
  ],
  declarations: [O3Page]
})
export class O3PageModule {}
