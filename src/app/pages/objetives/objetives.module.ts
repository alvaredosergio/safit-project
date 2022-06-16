import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjetivesPageRoutingModule } from './objetives-routing.module';

import { ObjetivesPage } from './objetives.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjetivesPageRoutingModule
  ],
  declarations: [ObjetivesPage]
})
export class ObjetivesPageModule {}
