import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthFireService {

  constructor(
    private angularFire: AngularFireAuth,
    private toast: ToastrService,
    private router: Router,
    public ngZone: NgZone
  ) { }

   // Sign in with email/password
  public SignIn(email:string, password:string) {
    return this.angularFire.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/dashboard']);
        });
        // this.SetUserData(result.user);
      }).catch((error) => {
        this.toast.error('A ocurrido un error, intentalo de nuevo');
      })
  }

   // Sign up with email/password
  public signUp(email: string, password: string) {
    return this.angularFire.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        console.log('usuario registrado');
        this.toast.success('usuario registrado!')
        this.router.navigate(['/login'])
        
        // this.SendVerificationMail();
        // this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
        this.toast.error('A ocurrido un error')
      })
  }

   // Reset Forggot password
  public ForgotPassword(passwordResetEmail:string) {
    return this.angularFire.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      this.toast.success('Te hemos enviado un correo, revisa tu bandeja')
    }).catch((error) => {
      this.toast.error(error)
    })
  }

}
