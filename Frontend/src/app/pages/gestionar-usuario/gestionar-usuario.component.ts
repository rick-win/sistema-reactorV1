import { Component, OnInit } from '@angular/core';

import {GestionarUsuarioService} from '../../services/gestionar-usuario.service';
import { Router } from '@angular/router';
import {AuthApiService} from "../../services/auth-api.service";
import {DataTablesModule} from "angular-datatables";
import {Subject} from "rxjs";
import {FormBuilder} from "@angular/forms";
import {UserFull} from "../../models/usuario.model";

@Component({
  selector: 'app-gestionar-usuario',
  templateUrl: './gestionar-usuario.component.html',
  styleUrls: ['./gestionar-usuario.component.scss']
})
export class GestionarUsuarioComponent implements OnInit {

  dtOptions: DataTables.Settings = {}
  dtTrigger = new Subject()
  showRegister : boolean;
  editing: boolean;
  users: any = [];

  newUser: UserFull = {
    id_Usuario: 0,
    email_Usuario: '',
    contrasena_Usuario: '',
    nom_Usuario: '',
    ape_Usuario: '',
    rol_Usuario: '',
    tel_Usuario: '',
  }

  oldUser: UserFull = {
    id_Usuario: 0,
    email_Usuario: '',
    contrasena_Usuario: '',
    nom_Usuario: '',
    ape_Usuario: '',
    rol_Usuario: '',
    tel_Usuario: '',
  }

  constructor
  (
    private gestionarUsuarioService : GestionarUsuarioService,
    public authSvc: AuthApiService,
    private router: Router,
    private fB: FormBuilder
    ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.gestionarUsuarioService.getUsuarios().subscribe(
      res => {
        this.users = res;
        console.log(this.users)
      },
        error => {console.log(error)}
    )
  }

  startUpdating(id: number){
    this.gestionarUsuarioService.getUsuarioById(id).subscribe(
      res => {
        this.oldUser = res;
        console.log('New user ', this.oldUser.email_Usuario, this.oldUser.id_Usuario);
        this.newUser.id_Usuario = this.oldUser.id_Usuario
        this.showRegister = true;
        this.editing = true;
      }
    )
  }

  updateUser(id: number){
    // if (!this.newUser.email_Usuario) {
    //   delete this.newUser.email_Usuario
    // }
    // if (!this.newUser.contrasena_Usuario) {
    //   delete this.newUser.contrasena_Usuario
    // }
    // if (!this.newUser.nom_Usuario) {
    //   delete this.newUser.nom_Usuario
    // }
    // if (!this.newUser.ape_Usuario) {
    //   delete this.newUser.ape_Usuario
    // }
    // if (!this.newUser.rol_Usuario) {
    //   delete this.newUser.rol_Usuario
    // }
    // if (!this.newUser.tel_Usuario) {
    //   delete this.newUser.tel_Usuario
    // }
    console.log(this.newUser)

    this.gestionarUsuarioService.updateUsuario(id, this.newUser).subscribe(
      res => {
        console.log(res)
      }
    )
  }

  deleteUser(id: number){
    delete this.newUser.id_Usuario
    this.gestionarUsuarioService.deleteUsuario(id).subscribe(
      res => {
        console.log(res)
      }
    )
  }

  createUser(){
    delete this.newUser.id_Usuario
    this.gestionarUsuarioService.saveUsuario(this.newUser).subscribe(
      res => {
        console.log(res)
      }
    )
  }

  public LogOut(): void {
    this.authSvc.logout();
    this.router.navigate(['login']);
  }

}
