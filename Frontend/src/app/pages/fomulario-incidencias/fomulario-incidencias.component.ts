import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fomulario-incidencias',
  templateUrl: './fomulario-incidencias.component.html',
  styleUrls: ['./fomulario-incidencias.component.scss']
})
export class FomularioIncidenciasComponent implements OnInit {
formularioIncidencias: FormGroup;
  constructor() { 
    this.formularioIncidencias = new FormGroup({});
  }

  ngOnInit(): void {
  }

  guardarFormularioIncidencias()
  {

  }

}
