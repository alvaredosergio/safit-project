import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AminoacidosPageRoutingModule } from './aminoacidos-routing.module';

import { AminoacidosPage } from './aminoacidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AminoacidosPageRoutingModule
  ],
  declarations: [AminoacidosPage]
})
export class AminoacidosPageModule {}
