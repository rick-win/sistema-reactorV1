import { Component, OnInit } from '@angular/core';
import { AuthFireService } from 'src/app/services/auth-fire.service';

import {GestionarUsuarioService} from '../../services/gestionar-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionar-usuario',
  templateUrl: './gestionar-usuario.component.html',
  styleUrls: ['./gestionar-usuario.component.scss']
})
export class GestionarUsuarioComponent implements OnInit {

  roles = ['administrador', 'supervisor', 'operario', 'invitado'];

  constructor
  (private gestionarUsuarioService : GestionarUsuarioService,
    public authServices: AuthFireService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.gestionarUsuarioService.getUsuarios().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  public LogOut(): void {
    this.authServices.LogOut().then( () => {
      this.router.navigate(['login']);
    })
  }

}