import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import { Router } from "@angular/router";
import { userInfo } from 'os';
import { Usuario } from '../models/interfaces';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {
  est = localStorage.getItem("estatura");
  pes = localStorage.getItem("peso");
  eda = localStorage.getItem("edad");
  sex = localStorage.getItem("sexo");
  obj = localStorage.getItem("objetivo");
  nom = localStorage.getItem("nombre");
  id = localStorage.getItem("id");


  newUsuario: Usuario = {
    Id: this.id,
    Nombre: this.nom,
    Sexo: this.sex,
    Edad: this.eda,
    Estatura: this.est,
    Peso: this.pes,
    Objetivo: this.obj,
    Rutinas: {
      "nombre": "",
      "objetivo": "",
      "lugar": "",
      "duracion": "",
      "equipamiento": "",
    }
  };

  constructor(public database: AuthenticationService,
    public authService: AuthenticationService,
    public router: Router) { }

  ngOnInit() {
  }

  refresh(): void {
    window.location.reload();
  }

  sacarId() {
    localStorage.setItem('id', this.authService.userData.uid)
  }

  save() {
    const info = this.newUsuario;
    const enlace = 'usuarios';
    this.database.crearDocument<Usuario>(info, enlace)
  }
}