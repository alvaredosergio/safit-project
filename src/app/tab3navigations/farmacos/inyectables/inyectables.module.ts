import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InyectablesPageRoutingModule } from './inyectables-routing.module';

import { InyectablesPage } from './inyectables.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InyectablesPageRoutingModule
  ],
  declarations: [InyectablesPage]
})
export class InyectablesPageModule {}
