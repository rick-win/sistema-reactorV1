import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFireService } from '../../services/auth-fire.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup;
  correoValido = false;
  passwordValido = false;
  constructor(
    private fb: FormBuilder,
    private authFireService: AuthFireService,
    private toast: ToastrService
  ) {
    this.formulario = new FormGroup({});
   }

  ngOnInit(): void {
    this.crearFormulario();
  }
  private crearFormulario() {
    this.formulario = this.fb.group({
      nombre: [null, Validators.required],
      correo: [null, Validators.required],
      cargo: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    })
  }
  public registrarUsuario() {
    const correo = this.formulario.get('correo')?.value;
    const password = this.formulario.get('password')?.value;
    console.log(this.correoValido);
    
    if (this.correoValido) {
      if (this.passwordValido) {
        this.authFireService.signUp(correo, password);
      }
    } else {
      this.toast.error('El correo debe ser del sena')
    }
  }
  public validarCorreo() {
    let entidadCorreo = this.formulario.get('correo')?.value.split('@')[1];
    console.log(entidadCorreo);
    if (entidadCorreo === 'misena.edu.co') {
      console.log('correo correcto');
      this.correoValido = true;
    } else {
      console.log('mostrar alerta');
      this.correoValido = false;
    }
  }
  public validarPassword() {
    const password = this.formulario.get('password')?.value;
    const retryPassword = this.formulario.get('confirmPassword')?.value;
    if (password && retryPassword) {
      if (password === retryPassword) {
        this.passwordValido = true;
        console.log('contraseñas coinciden');
      } else {
        this.passwordValido = false;
        this.toast.error('las contraseñas no coinciden ');
        console.log('contraseñas diferentes error'); 
      }
    }
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.correoValido = false;
    this.passwordValido = false;
  }

}
