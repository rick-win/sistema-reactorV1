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

  roles = [
    { nombre: 'Administrador', id: 1}, 
    { nombre: 'Supervisor', id: 2}, 
    { nombre: 'Operario', id: 3}, 
    { nombre: 'Tecnico', id: 4}
  ]; 



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

  idRoles: string;

  constructor(
    private fb: FormBuilder,
    private authFireService: AuthFireService,
    private toast: ToastrService,
    private gestionarUsuarioService: GestionarUsuarioService
  ) {
    this.formularioReg = new FormGroup({});
    this.idRoles = '';
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
    })
  }




  public registrarUsuario() {

    delete this.formularioReg.value.ConfirmContrasena;
    let objEnviar = {
      ...this.formularioReg.value,
      Rol: this.idRoles
    }
    console.log(objEnviar);

    const correo = this.formularioReg.get('Email_Usuario')?.value;
    const password = this.formularioReg.get('Contrasena_Usuario')?.value;
    
    if (this.correoValido) {
      if (this.passwordValido) {
        this.gestionarUsuarioService.saveUsuario(objEnviar).subscribe //formularioReg.value
            ((res: any)=>{
                console.log(res)
                if(res.message === 'Usuario guardado'){
                  this.formularioReg.reset();
                  this.idRoles = '';
                }
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
      this.correoValido = true;
    } else {
      this.correoValido = false;
    }
  }

  public rolesSeleccionados(evento: any) {
    console.log(evento);
    this.idRoles = this.idRoles + ',' + evento.id;
    console.log(this.idRoles);
    
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
