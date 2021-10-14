import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-acceso-funcional-operario',
  templateUrl: './acceso-funcional-operario.component.html',
  styleUrls: ['./acceso-funcional-operario.component.scss']
})
export class AccesoFuncionalOperarioComponent implements OnInit {

  constructor(
    private http : HttpClient,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
