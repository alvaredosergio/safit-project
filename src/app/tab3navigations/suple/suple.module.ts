import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuplePageRoutingModule } from './suple-routing.module';

import { SuplePage } from './suple.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuplePageRoutingModule
  ],
  declarations: [SuplePage]
})
export class SuplePageModule {}
