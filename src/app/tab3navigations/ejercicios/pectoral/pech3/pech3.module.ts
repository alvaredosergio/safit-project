import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pech3PageRoutingModule } from './pech3-routing.module';

import { Pech3Page } from './pech3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pech3PageRoutingModule
  ],
  declarations: [Pech3Page]
})
export class Pech3PageModule {}
