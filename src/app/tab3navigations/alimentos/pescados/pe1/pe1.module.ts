import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pe1PageRoutingModule } from './pe1-routing.module';

import { Pe1Page } from './pe1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pe1PageRoutingModule
  ],
  declarations: [Pe1Page]
})
export class Pe1PageModule {}
