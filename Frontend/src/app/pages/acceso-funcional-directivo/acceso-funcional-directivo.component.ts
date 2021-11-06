import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { DatatablesComponent } from '../datatables/datatables.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-acceso-funcional-directivo',
  templateUrl: './acceso-funcional-directivo.component.html',
  styleUrls: ['./acceso-funcional-directivo.component.scss']
})
export class AccesoFuncionalDirectivoComponent implements OnInit {

  constructor(
    private http : HttpClient,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
