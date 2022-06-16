import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Abd1PageRoutingModule } from './abd1-routing.module';

import { Abd1Page } from './abd1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Abd1PageRoutingModule
  ],
  declarations: [Abd1Page]
})
export class Abd1PageModule {}
