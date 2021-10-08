import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.scss']
})
export class RegistroProductoComponent implements OnInit {
  formulary: FormGroup;
  constructor() {
    this.formulary = new FormGroup({});
  }

  ngOnInit(): void {
  }

  registrarProducto(){}

}
