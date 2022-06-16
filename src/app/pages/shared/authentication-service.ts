import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { User } from './user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFirestore , AngularFirestoreDocument , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../models/interfaces';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  id: string = null;
  userData: any;
  constructor(
    public angularFirestore: AngularFirestore,
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }
  // Logueo con email/contraseña
  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }
  // Registro con email/contraseña
  RegisterUser(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }
  // Verificación de email cuando un usuario se registra
  SendVerificationMail() {
    return this.ngFireAuth.currentUser.then((user) => {
      return user.sendEmailVerification().then(() => {
      });
    });
  }
  // Recuperar contraseña
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          'El correo de recuperación de contraseña ha sido enviado, revise su bandeja de entrada.'
        );
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }
  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.emailVerified !== false ? true : false;
  }
  // Registro con Gmail
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
// Registro con Facebook
FacebookAuth() {
  return this.AuthLogin(new auth.FacebookAuthProvider());
}


  // Auth providers
  AuthLogin(provider) {
    return this.ngFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['tabs']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Store user in localStorage
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  refresh(): void {
    window.location.reload();
}
  // Deslogueo
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.refresh();
      this.router.navigate(['login']);
    });
  }

  crearDocument<Usuario>(info: Usuario, enlace: string){
    const referencia = this.angularFirestore.collection<Usuario>(enlace);
    return referencia.doc(this.userData.uid).set(info);
  }

  borrarDocument(path, id){ 
    
  }


  updateDocumentRutina1(path){
    const doc: AngularFirestoreDocument<Usuario> = this.angularFirestore.doc(path);
    doc.update({Rutinas: { nombre: "Rutina básica en casa", duracion: "1 semana", lugar: "Casa", objetivo: "Mantener línea", equipamiento: "No" }});
    return doc.valueChanges();
  }
  
  updateDocumentRutina2(path){
    const doc: AngularFirestoreDocument<Usuario> = this.angularFirestore.doc(path);
    doc.update({Rutinas: {nombre: "Rutina intermedia gimnasio", duracion: "1 mes", lugar: "Gimnasio", objetivo: "Ganar  musculatura", equipamiento: "Si"}})
    return doc.valueChanges();
  }
  updateDocumentRutina3(path){
    const doc: AngularFirestoreDocument<Usuario> = this.angularFirestore.doc(path);
    doc.update({Rutinas: {nombre: "Rutina powerlifting", duracion: "2 meses", lugar: "Gimnasio", objetivo: "Aumentar fuerza", equipamiento: "Si"}})
    return doc.valueChanges();
  }
  updateDocumentRutina4(path){
    const doc: AngularFirestoreDocument<Usuario> = this.angularFirestore.doc(path);
    doc.update({Rutinas: {nombre: "Rutina perdida de peso", duracion: "1 mes", lugar: "Casa", objetivo: "Perder peso", equipamiento: "No"}})
    return doc.valueChanges();
  }

  getDocument<tipo>(path){
    const doc: AngularFirestoreDocument<tipo> = this.angularFirestore.doc(path);
    return doc.valueChanges();
  }

  getDocumentSimple<Usuario>(path){
    const doc: AngularFirestoreDocument<Usuario> = this.angularFirestore.doc(path);
    console.log(doc.get(path.nombre))
  }

  getDocumentSimple1<Usuario>(info: Usuario, enlace: string){
    const referencia = this.angularFirestore.collection<Usuario>(enlace);
    return referencia.doc(this.userData.uid).get(info);
  }

  

}