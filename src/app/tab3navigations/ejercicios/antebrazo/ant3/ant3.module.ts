import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ant3PageRoutingModule } from './ant3-routing.module';

import { Ant3Page } from './ant3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ant3PageRoutingModule
  ],
  declarations: [Ant3Page]
})
export class Ant3PageModule {}
