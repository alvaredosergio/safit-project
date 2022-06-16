import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Abd3PageRoutingModule } from './abd3-routing.module';

import { Abd3Page } from './abd3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Abd3PageRoutingModule
  ],
  declarations: [Abd3Page]
})
export class Abd3PageModule {}
