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
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  nombre: string;
  estatura: string;
  peso: string;
  sexo: string;
  edad: string;
  objetivo: string;
  ruNombre : string;

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

  ngOnInit() {

  }

  editarRutina1() {
    const path = '/usuarios/'+localStorage.getItem('id')
    this.authService.updateDocumentRutina1(path)
    this.router.navigate(['/tabs/tab2'])
  }
  editarRutina2() {
    const path = '/usuarios/'+localStorage.getItem('id')
    this.authService.updateDocumentRutina2(path)
    this.router.navigate(['/tabs/tab2'])    
  }
  editarRutina3() {
    const path = '/usuarios/'+localStorage.getItem('id')
    this.authService.updateDocumentRutina3(path)  
    this.router.navigate(['/tabs/tab2'])  
  }
  editarRutina4() {
    const path = '/usuarios/'+localStorage.getItem('id')
    this.authService.updateDocumentRutina4(path)  
    this.router.navigate(['/tabs/tab2'])  
  }

}
