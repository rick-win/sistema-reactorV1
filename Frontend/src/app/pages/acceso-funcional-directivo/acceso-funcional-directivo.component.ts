import { Component, OnInit } from '@angular/core';
import { DatatablesComponent } from '../datatables/datatables.component'; 
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subject, Subscriber } from 'rxjs';

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

  constructor(
    private http : HttpClient,
    public router: Router,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 6,
      language : {
        url :'//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };
    this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe((res:any) => {this.data = res.data
    this.dtTrigger.next();
    });  


  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    }


}
