import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
    public database: AuthenticationService,
    public authService: AuthenticationService,
    public router: Router
  ) { }


  ngOnInit() {
    
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  signUp(email, password) {
    this.authService.RegisterUser(email.value, password.value)
      .then(async (res) => {
        // Do something here
        this.authService.SendVerificationMail()
        this.router.navigate(['firebase-register']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  sacarId(){
    localStorage.setItem('id',this.authService.userData.uid)
  }
}