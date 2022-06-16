import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { I3PageRoutingModule } from './i3-routing.module';

import { I3Page } from './i3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    I3PageRoutingModule
  ],
  declarations: [I3Page]
})
export class I3PageModule {}
