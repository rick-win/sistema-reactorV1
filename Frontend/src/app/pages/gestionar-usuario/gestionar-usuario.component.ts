import { Component, OnInit } from '@angular/core';

import {GestionarUsuarioService} from '../../services/gestionar-usuario.service';
import { Router } from '@angular/router';
import {AuthApiService} from "../../services/auth-api.service";
import {DataTablesModule} from "angular-datatables";
import {Subject} from "rxjs";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-gestionar-usuario',
  templateUrl: './gestionar-usuario.component.html',
  styleUrls: ['./gestionar-usuario.component.scss']
})
export class GestionarUsuarioComponent implements OnInit {

  dtOptions: DataTables.Settings = {}
  dtTrigger = new Subject()
  data: any;

  constructor
  (private gestionarUsuarioService : GestionarUsuarioService,
    public authSvc: AuthApiService,
    private router: Router,
    private fB: FormBuilder
    ) { }

  ngOnInit(): void {
    this.gestionarUsuarioService.getUsuarios().subscribe(
      res => (this.data = res)
    );
    console.log(this.data);
  }

  public LogOut(): void {
    this.authSvc.logout();
    this.router.navigate(['login']);
  }

}
