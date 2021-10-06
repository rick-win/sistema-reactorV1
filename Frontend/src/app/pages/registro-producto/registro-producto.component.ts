import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.scss']
})
export class RegistroProductoComponent implements OnInit {
  formulario: FormGroup;
  constructor() { 
    this.formulario = new FormGroup({});
  }

  ngOnInit(): void {
  }

  registrarProducto(){}

}
