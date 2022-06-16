import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmacosPageRoutingModule } from './farmacos-routing.module';

import { FarmacosPage } from './farmacos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmacosPageRoutingModule
  ],
  declarations: [FarmacosPage]
})
export class FarmacosPageModule {}
