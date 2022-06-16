import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Abd4PageRoutingModule } from './abd4-routing.module';

import { Abd4Page } from './abd4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Abd4PageRoutingModule
  ],
  declarations: [Abd4Page]
})
export class Abd4PageModule {}
