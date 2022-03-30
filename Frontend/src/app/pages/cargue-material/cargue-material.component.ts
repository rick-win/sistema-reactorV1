import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cargue-material',
  templateUrl: './cargue-material.component.html',
  styleUrls: ['./cargue-material.component.scss']
})
export class CargueMaterialComponent implements OnInit {
 formularioTolva: FormGroup;
  constructor() {
    this.formularioTolva = new FormGroup({});
   }

  ngOnInit(): void {
  }

  guardarParametrosTolva(){}

}
