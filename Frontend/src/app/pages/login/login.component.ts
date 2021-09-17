import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthFireService } from '../../services/auth-fire.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {firebase} from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  formulario: FormGroup;

  private isValidEmail = /\S*@\S*\.\S*/;
  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private authServices: AuthFireService
    ) {
    this.formulario = new FormGroup({});
    
   }

   

  ngOnInit(): void {
    this.crearFormulario();
  }

  private crearFormulario(): void{
    this.formulario = this.fb.group({
      correo: [null, [Validators.required, Validators.pattern(this.isValidEmail)]],
      password: [null, [Validators.required]]
    })
  }
  public login() {
    const correo = this.formulario.get('correo')?.value;
    const password = this.formulario.get('password')?.value;
    this.authServices.SignIn(correo, password);
  }

  public loginGoogle(){
    this.auth.signInWithPopup(new firebase.Google);
  }

  public recuperarPassword() {
    
  }

}
