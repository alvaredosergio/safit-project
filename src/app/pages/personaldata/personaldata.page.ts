import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaldata',
  templateUrl: './personaldata.page.html',
  styleUrls: ['./personaldata.page.scss'],
})
export class PersonaldataPage implements OnInit {

  nombre: string = null;
  estatura: string = null;
  peso: string = null;
  edad: string = null;

  constructor() { }

  ngOnInit() {
  }

  guardarDatos(){
    localStorage.setItem('nombre', this.nombre)
    localStorage.setItem('estatura', this.estatura)
    localStorage.setItem('peso',this.peso)
    localStorage.setItem('edad',this.edad)
  }
}
