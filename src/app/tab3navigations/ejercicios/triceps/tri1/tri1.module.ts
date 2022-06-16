import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tri1PageRoutingModule } from './tri1-routing.module';

import { Tri1Page } from './tri1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tri1PageRoutingModule
  ],
  declarations: [Tri1Page]
})
export class Tri1PageModule {}
