import { Component, OnInit } from '@angular/core';
import { DatatablesComponent } from '../datatables/datatables.component'; 
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso-funcional-directivo',
  templateUrl: './acceso-funcional-directivo.component.html',
  styleUrls: ['./acceso-funcional-directivo.component.scss']
})
export class AccesoFuncionalDirectivoComponent implements OnInit {

  constructor(
    private http : HttpClient,
    public router: Router,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {
  }

}
