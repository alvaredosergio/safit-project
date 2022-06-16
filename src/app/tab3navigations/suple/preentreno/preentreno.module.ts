import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreentrenoPageRoutingModule } from './preentreno-routing.module';

import { PreentrenoPage } from './preentreno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreentrenoPageRoutingModule
  ],
  declarations: [PreentrenoPage]
})
export class PreentrenoPageModule {}
