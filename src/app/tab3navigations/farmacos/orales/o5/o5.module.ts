import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { O5PageRoutingModule } from './o5-routing.module';

import { O5Page } from './o5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    O5PageRoutingModule
  ],
  declarations: [O5Page]
})
export class O5PageModule {}
