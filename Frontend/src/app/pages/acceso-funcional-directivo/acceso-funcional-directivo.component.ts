import { Component, OnInit } from '@angular/core';
import { DatatablesComponent } from '../datatables/datatables.component';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subject, Subscriber } from 'rxjs';
import {AuthApiService} from "../../services/auth-api.service";

@Component({
  selector: 'app-acceso-funcional-directivo',
  templateUrl: './acceso-funcional-directivo.component.html',
  styleUrls: ['./acceso-funcional-directivo.component.scss']
})
export class AccesoFuncionalDirectivoComponent implements OnInit {

  indicadoresMat:boolean = false;
  indicadoresProd:boolean = false;

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  data: any;

  username: string;
  nameUser: string;

  constructor(
    private authApi: AuthApiService,
    public router: Router
  ) {
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 6,
      language : {
        url :'//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };
    this.username = localStorage.getItem('Username');
    this.nameUser = localStorage.getItem('Name')
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  logOut(): void {
    this.authApi.logout();
    this.router.navigate(['/login'])
  }
}
