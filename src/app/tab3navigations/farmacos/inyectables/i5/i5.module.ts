import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { I5PageRoutingModule } from './i5-routing.module';

import { I5Page } from './i5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    I5PageRoutingModule
  ],
  declarations: [I5Page]
})
export class I5PageModule {}
