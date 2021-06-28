import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthFireService } from '../../services/auth-fire.service';

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
  public recuperarPassword() {
    
  }

}
