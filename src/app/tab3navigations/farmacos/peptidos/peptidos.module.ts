import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeptidosPageRoutingModule } from './peptidos-routing.module';

import { PeptidosPage } from './peptidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeptidosPageRoutingModule
  ],
  declarations: [PeptidosPage]
})
export class PeptidosPageModule {}
