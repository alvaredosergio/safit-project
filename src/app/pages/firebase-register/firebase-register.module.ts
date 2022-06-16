import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FirebaseRegisterPageRoutingModule } from './firebase-register-routing.module';
import { FirebaseRegisterPage } from './firebase-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaseRegisterPageRoutingModule
  ],
  declarations: [FirebaseRegisterPage]
})
export class FirebaseRegisterPageModule {}
