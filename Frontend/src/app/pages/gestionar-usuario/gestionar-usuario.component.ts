import {Component, OnInit, ViewChild} from '@angular/core';

import {GestionarUsuarioService} from '../../services/gestionar-usuario.service';
import { Router } from '@angular/router';
import {AuthApiService} from "../../services/auth-api.service";
import {Subject} from "rxjs";
import {FormBuilder} from "@angular/forms";
import {UserFull} from "../../models/usuario.model";
import {DataTableDirective} from "angular-datatables";
import {isDate} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-gestionar-usuario',
  templateUrl: './gestionar-usuario.component.html',
  styleUrls: ['./gestionar-usuario.component.scss']
})
export class GestionarUsuarioComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})

  dtOptions: any = {}
  dtTrigger: Subject<any> = new Subject<any>();
  showRegister : boolean;
  editing: boolean;
  users: any = [];
  result: string = '';

  min: Date;
  max: Date;

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
    //get all users to display as data
    this.getUsers()

    //Data table config
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'colvis',
        'copy',
        {
          extend: 'csv',
          text: 'CSV export',
          fieldSeparator: ';',
          exportOption: [1, 2, 3]
        },
        'excel'
      ]
    }

    // //Filter
    // $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {
    //   const createdAt = parseFloat(data[6]) || 6; // use data for the id column
    //   if ((isDate(this.min) && isDate(this.max)) ||
    //     (isDate(this.min) && createdAt <= this.max) ||
    //     (this.min <= createdAt && isDate(this.max)) ||
    //     (this.min <= createdAt && createdAt <= this.max)) {
    //     return true;
    //   }
    //   return false;
    // })
  }

  getUsers(){
    this.gestionarUsuarioService.getUsuarios().subscribe(
      res => {
        this.users = res;
        console.log(this.users)
        this.dtTrigger.next()
      },
        error => {console.log(error)}
    )
  }

  startUpdating(id: number){
    this.result = ''
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

  startCreating(): void {
    this.result = ''
    this.oldUser = {
      id_Usuario: 0,
      email_Usuario: '',
      contrasena_Usuario: '',
      nom_Usuario: '',
      ape_Usuario: '',
      rol_Usuario: '',
      tel_Usuario: '',
    }
    this.editing = false
    this.showRegister = true
    console.log('Creating')
  }

  updateUser(id: number){
    console.log(this.newUser)
    console.log('Editing')

    this.gestionarUsuarioService.updateUsuario(id, this.newUser).subscribe(
      res => {
        this.result = JSON.stringify(res)
        this.result = JSON.parse(this.result).message
        this.getUsers()
      }
    )
  }

  deleteUser(id: number){
    delete this.newUser.id_Usuario
    this.gestionarUsuarioService.deleteUsuario(id).subscribe(
      res => {
        this.result = JSON.stringify(res)
        this.result = JSON.parse(this.result).message
        this.getUsers()
      }
    )
  }

  createUser(){
    delete this.newUser.id_Usuario
    this.gestionarUsuarioService.saveUsuario(this.newUser).subscribe(
      res => {
        this.result = JSON.stringify(res)
        this.result = JSON.parse(this.result).message
        this.getUsers()
      }
    )
  }

  public LogOut(): void {
    this.authSvc.logout();
    this.router.navigate(['login']);
  }

}
