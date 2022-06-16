import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../pages/shared/authentication-service";
import { Router } from "@angular/router";
import { userInfo } from 'os';
import { Usuario } from '../pages/models/interfaces';
import { AngularFirestore , AngularFirestoreDocument , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { info } from 'console';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  nombre: string;
  estatura: string;
  peso: string;
  sexo: string;
  edad: string;
  objetivo: string;

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

    ngOnInit():void {
      const path = '/usuarios/'+localStorage.getItem('id');
      this.authService.getDocument<Usuario>(path).subscribe( res => {
        this.nombre = res.Nombre;
        this.estatura = res.Estatura;
        this.peso = res.Peso;
        this.sexo = res.Sexo;
        this.objetivo = res.Objetivo;
        this.edad = res.Edad;
      });
    }

    SignOut() {
      return this.ngFireAuth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['login']);
      });
    }
}
