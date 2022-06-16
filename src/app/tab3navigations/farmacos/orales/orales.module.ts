import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OralesPageRoutingModule } from './orales-routing.module';

import { OralesPage } from './orales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OralesPageRoutingModule
  ],
  declarations: [OralesPage]
})
export class OralesPageModule {}
