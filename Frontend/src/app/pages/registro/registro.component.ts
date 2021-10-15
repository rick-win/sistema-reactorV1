import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFireService } from '../../services/auth-fire.service';
import { ToastrService } from 'ngx-toastr';
import { GestionarUsuarioService } from '../../services/gestionar-usuario.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formularioReg: FormGroup;
  correoValido = false;
  passwordValido = false;
  constructor(
    private fb: FormBuilder,
    private authFireService: AuthFireService,
    private toast: ToastrService,
    private gestionarUsuarioService: GestionarUsuarioService
  ) {
    this.formularioReg = new FormGroup({});
   }

  ngOnInit(): void {
    this.crearFormulario();
  }
  private crearFormulario() {
    this.formularioReg = this.fb.group({
      nombres: [null, Validators.required],
      apellidos: [null, Validators.required],
      telefono: [null, Validators.required],
      correo: [null, Validators.required],
      cargo: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    })
  }
  public registrarUsuario() {
    const correo = this.formularioReg.get('correo')?.value;
    const password = this.formularioReg.get('password')?.value;
    
    if (this.correoValido) {
      if (this.passwordValido) {
        this.authFireService.signUp(correo, password);
        console.log('entra a guardar ');
        this.gestionarUsuarioService.saveUsuario(this.formularioReg.value)
      }
    } else {
      this.toast.error('El correo debe ser del sena')
    }
  }
  public validarCorreo() {
    let entidadCorreo = this.formularioReg.get('correo')?.value.split('@')[1];
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
    const password = this.formularioReg.get('password')?.value;
    const retryPassword = this.formularioReg.get('confirmPassword')?.value;
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
