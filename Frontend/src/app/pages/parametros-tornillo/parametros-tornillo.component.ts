import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parametros-tornillo',
  templateUrl: './parametros-tornillo.component.html',
  styleUrls: ['./parametros-tornillo.component.scss']
})
export class ParametrosTornilloComponent implements OnInit {

  formTornillo: FormGroup;
  constructor() 
  {
    this.formTornillo = new FormGroup({});
   }

  ngOnInit(): void {
  }

  guardarParametrosTolva()
  {

  }

}
