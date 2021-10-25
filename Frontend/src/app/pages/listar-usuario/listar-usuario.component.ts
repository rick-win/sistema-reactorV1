import { Component, HostBinding,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionarUsuarioService } from 'src/app/services/gestionar-usuario.service';


@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  usuarios: any = [];
  constructor(private gestionarUsuarioService: GestionarUsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.gestionarUsuarioService.getUsuarios().subscribe(
      res => {
        this.usuarios = res;
      },
      err => console.error(err)
    );
  }

  deleteUsuario(id:any){
    this.gestionarUsuarioService.deleteUsuario(id).subscribe(
      res => {
        console.log(res);
        this.getUsuarios();
       },
        err => console.log(err)
      )
  }

  editUsuario(id:any){

  }

}


