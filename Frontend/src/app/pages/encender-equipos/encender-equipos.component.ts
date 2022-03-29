import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-encender-equipos',
  templateUrl: './encender-equipos.component.html',
  styleUrls: ['./encender-equipos.component.scss']
})
export class EncenderEquiposComponent implements OnInit {
  formularioEquiposManuales: FormGroup;
  constructor() { 
    this.formularioEquiposManuales = new FormGroup({}); 
  }

  ngOnInit(): void {
  }

  guardarEncendidoEquipos(){

  }

}
