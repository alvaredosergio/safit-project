import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { La1PageRoutingModule } from './la1-routing.module';

import { La1Page } from './la1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    La1PageRoutingModule
  ],
  declarations: [La1Page]
})
export class La1PageModule {}
