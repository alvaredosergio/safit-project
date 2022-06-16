import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PectoralPageRoutingModule } from './pectoral-routing.module';

import { PectoralPage } from './pectoral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PectoralPageRoutingModule
  ],
  declarations: [PectoralPage]
})
export class PectoralPageModule {}
