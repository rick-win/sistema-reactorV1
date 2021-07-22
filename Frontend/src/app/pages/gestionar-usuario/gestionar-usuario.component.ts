import { Component, OnInit } from '@angular/core';

import {GestionarUsuarioService} from '../../services/gestionar-usuario.service';

@Component({
  selector: 'app-gestionar-usuario',
  templateUrl: './gestionar-usuario.component.html',
  styleUrls: ['./gestionar-usuario.component.scss']
})
export class GestionarUsuarioComponent implements OnInit {

  constructor(private gestionarUsuarioService : GestionarUsuarioService) { }

  ngOnInit(): void {
    this.gestionarUsuarioService.getUsuarios().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
