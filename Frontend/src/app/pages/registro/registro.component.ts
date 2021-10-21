import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFireService } from '../../services/auth-fire.service';
import { ToastrService } from 'ngx-toastr';
import { GestionarUsuarioService } from '../../services/gestionar-usuario.service';
import { Usuario } from 'src/app/models/Usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  roles = ['Administrador', 'Supervisor', 'Operario', 'Tecnico'];



  [x: string]: any;
  formularioReg: FormGroup;
  correoValido = false;
  passwordValido = false;

  usuario: Usuario ={
    Nom_Usuario: '',
    Ape_Usuario:'',
    Tel_Usuario: '',
    Email_Usuario: '',
    //cargo:'',
    Contrasena_Usuario:'',
    ConfirmContrasena:'',
    roles:[]
  };



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
      Nom_Usuario: [null, Validators.required],
      Ape_Usuario: [null, Validators.required],
      Tel_Usuario: [null, Validators.required],
      Email_Usuario: [null, Validators.required],
      //cargo: [null, Validators.required],
      Contrasena_Usuario: [null, Validators.required],
      ConfirmContrasena: [null, Validators.required],
      roles: [null, Validators.required],
    })
  }




  public registrarUsuario() {

    //delete this.usuario.ConfirmContrasena;
    // const ObjEnviar =  {
    //   ... this.formularioReg.get('ConfirmContrasena')?.value,
    //   delete: this.usuario.ConfirmContrasena
    // }
    

    const correo = this.formularioReg.get('Email_Usuario')?.value;
    const password = this.formularioReg.get('Contrasena_Usuario')?.value;
    
    if (this.correoValido) {
      if (this.passwordValido) {
        this.authFireService.signUp(correo, password);
        console.log('entra a guardar ');
        this.gestionarUsuarioService.saveUsuario(this.formularioReg.value).subscribe //formularioReg.value
            (
              res=>{
                console.log(res)
              },
              err =>console.error(err)
            )
      }
    } else {
      this.toast.error('El correo debe ser del sena')
    }
  }


  public validarCorreo() {
    let entidadCorreo = this.formularioReg.get('Email_Usuario')?.value.split('@')[1];
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
    const password = this.formularioReg.get('Contrasena_Usuario')?.value;
    const retryPassword = this.formularioReg.get('ConfirmContrasena')?.value;
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
