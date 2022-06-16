import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bic1PageRoutingModule } from './bic1-routing.module';

import { Bic1Page } from './bic1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bic1PageRoutingModule
  ],
  declarations: [Bic1Page]
})
export class Bic1PageModule {}
