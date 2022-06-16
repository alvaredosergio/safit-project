import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatinaPageRoutingModule } from './creatina-routing.module';

import { CreatinaPage } from './creatina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatinaPageRoutingModule
  ],
  declarations: [CreatinaPage]
})
export class CreatinaPageModule {}
