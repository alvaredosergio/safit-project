import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  constructor(public ngFireAuth: AngularFireAuth, public router: Router) { 

  }

  ngOnInit() {
  }

  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
      localStorage.removeItem('id');
      localStorage.removeItem('estatura');
      localStorage.removeItem('peso');
      localStorage.removeItem('sexo');
      localStorage.removeItem('edad');
      localStorage.removeItem('objetivo');
      localStorage.removeItem('nombre');
    });
  }

}
