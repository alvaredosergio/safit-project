import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bic3PageRoutingModule } from './bic3-routing.module';

import { Bic3Page } from './bic3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bic3PageRoutingModule
  ],
  declarations: [Bic3Page]
})
export class Bic3PageModule {}
