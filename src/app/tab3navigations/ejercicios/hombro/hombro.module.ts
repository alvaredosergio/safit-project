import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HombroPageRoutingModule } from './hombro-routing.module';

import { HombroPage } from './hombro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HombroPageRoutingModule
  ],
  declarations: [HombroPage]
})
export class HombroPageModule {}
