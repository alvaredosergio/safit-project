import { Component, OnInit } from '@angular/core';
import { IonBackButtonDelegate } from '@ionic/angular';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

mujer = 'Mujer';
hombre = 'Hombre';

  constructor() { }

  ngOnInit() {
  }

  guardarMujer(){
    localStorage.setItem('sexo',this.mujer)
  }
  guardarHombre(){
    localStorage.setItem('sexo',this.hombre)
  }

}
