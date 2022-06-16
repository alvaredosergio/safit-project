import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PescadosPageRoutingModule } from './pescados-routing.module';

import { PescadosPage } from './pescados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PescadosPageRoutingModule
  ],
  declarations: [PescadosPage]
})
export class PescadosPageModule {}
