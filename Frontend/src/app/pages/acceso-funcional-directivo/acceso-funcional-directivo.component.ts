import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { DatatablesComponent } from '../datatables/datatables.component';

@Component({
  selector: 'app-acceso-funcional-directivo',
  templateUrl: './acceso-funcional-directivo.component.html',
  styleUrls: ['./acceso-funcional-directivo.component.scss']
})
export class AccesoFuncionalDirectivoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
