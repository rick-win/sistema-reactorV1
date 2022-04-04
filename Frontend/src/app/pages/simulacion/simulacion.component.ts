import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.component.html',
  styleUrls: ['./simulacion.component.scss']
})
export class SimulacionComponent implements OnInit {

  formularioInsmo: FormGroup;
  formularioZna: FormGroup;
  constructor(
    public router: Router
  ) { 
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
