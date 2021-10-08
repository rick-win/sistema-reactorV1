import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reporte-bitacora-eventos-operario',
  templateUrl: './reporte-bitacora-eventos-operario.component.html',
  styleUrls: ['./reporte-bitacora-eventos-operario.component.scss']
})
export class ReporteBitacoraEventosOperarioComponent implements OnInit {
  formulary: FormGroup;
  constructor() {
    this.formulary = new FormGroup({});
  }

  ngOnInit(): void {
  }

  registerFailure(){}
}
