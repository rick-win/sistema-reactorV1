import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-gestionar-alarmas',
  templateUrl: './gestionar-alarmas.component.html',
  styleUrls: ['./gestionar-alarmas.component.scss']
})
export class GestionarAlarmasComponent implements OnInit {

  formGestionarAlarma: FormGroup;
  constructor() {
    this.formGestionarAlarma = new FormGroup({});
   }

  ngOnInit(): void {
  }

  registrarProducto(){}

}
