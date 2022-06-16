import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { I1PageRoutingModule } from './i1-routing.module';

import { I1Page } from './i1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    I1PageRoutingModule
  ],
  declarations: [I1Page]
})
export class I1PageModule {}
