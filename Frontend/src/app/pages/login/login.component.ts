import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  private isValidEmail = /\S*@\S*\.\S*/;
  constructor(private fb: FormBuilder) {
    this.formulario = new FormGroup({});
   }

  ngOnInit(): void {
    this.crearFormulario();
  }

  private crearFormulario(): void{
    this.formulario = this.fb.group({
      correo: [null, [Validators.required, Validators.pattern(this.isValidEmail)]],
      contrasenia: [null, [Validators.required]]
    })
  }
  public login() {

  }

}
