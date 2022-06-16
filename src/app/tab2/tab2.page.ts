import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../pages/shared/authentication-service";
import { Router } from "@angular/router";
import { userInfo } from 'os';
import { Usuario } from '../pages/models/interfaces';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { info } from 'console';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  nombre: string;
  estatura: string;
  peso: string;
  sexo: string;
  edad: string;
  objetivo: string;

  ruNombre: string;
  ruDuracion: string;
  ruObjetivo: string;
  ruLugar: string;
  ruEquipamiento: string;


  usuarios: Observable<any[]>;

  constructor(public ngFireAuth: AngularFireAuth,
    public database: AuthenticationService,
    public authService: AuthenticationService,
    public angularFirestore: AngularFirestore,
    public afStore: AngularFirestore,
    public router: Router,
  ) {
    this.usuarios = angularFirestore.collection('usuarios').valueChanges();
  }

  ngOnInit(): void {
    const path = '/usuarios/' + localStorage.getItem('id');
    this.authService.getDocument<Usuario>(path).subscribe(res => {
      this.ruNombre = res.Rutinas.nombre;
      this.ruDuracion = res.Rutinas.duracion;
      this.ruObjetivo = res.Rutinas.objetivo;
      this.ruLugar = res.Rutinas.lugar;
      this.ruEquipamiento = res.Rutinas.equipamiento;
    });
  }


  visualizarRutina() {
    const path = '/usuarios/' + localStorage.getItem('id');
    this.authService.getDocument<Usuario>(path).subscribe(res => {
      if (res.Rutinas.nombre == "Rutina básica en casa") {
        this.router.navigate(['rutina1']);
      } else if(res.Rutinas.nombre == "Rutina intermedia gimnasio") {
        this.router.navigate(['rutina2']);
      } else if(res.Rutinas.nombre == "Rutina powerlifting") {
        this.router.navigate(['rutina3']);
      } else if(res.Rutinas.nombre == "Rutina perdida de peso") {
        this.router.navigate(['rutina4']);
      }
    });
  }
}


