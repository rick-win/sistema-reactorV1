import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-acceso-funcional-tecnico',
  templateUrl: './acceso-funcional-tecnico.component.html',
  styleUrls: ['./acceso-funcional-tecnico.component.scss']
})
export class AccesoFuncionalTecnicoComponent implements OnInit {

  constructor(
    private http : HttpClient,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  

}
