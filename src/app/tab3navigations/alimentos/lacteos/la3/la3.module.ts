import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { La3PageRoutingModule } from './la3-routing.module';

import { La3Page } from './la3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    La3PageRoutingModule
  ],
  declarations: [La3Page]
})
export class La3PageModule {}
