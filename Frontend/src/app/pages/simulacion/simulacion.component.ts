import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.component.html',
  styleUrls: ['./simulacion.component.scss']
})
export class SimulacionComponent implements OnInit {

  formularioInsmo: FormGroup;
  formularioZna: FormGroup;
  constructor() { 
    this.formularioInsmo = new FormGroup({});
    this.formularioZna = new FormGroup({});
  }

  ngOnInit(): void {
  }

  registrarPerfTemperatura(){
    
  }

  registrarInsumo(){
    
  }

}
