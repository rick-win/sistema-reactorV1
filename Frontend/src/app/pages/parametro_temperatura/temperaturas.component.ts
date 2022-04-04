import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-temperaturas',
  templateUrl: './temperaturas.component.html',
  styleUrls: ['./temperaturas.component.scss']
})
export class TemperaturasComponent implements OnInit {
  formulario: FormGroup;
  constructor() { 
    this.formulario = new FormGroup({});
  }

  ngOnInit(): void {
  }

  registrarPerfTemperatura(){
    
  }
}
