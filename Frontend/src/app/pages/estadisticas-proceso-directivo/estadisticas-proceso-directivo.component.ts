import { Component, OnDestroy,OnInit } from '@angular/core';
import { Subject, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-estadisticas-proceso-directivo',
  templateUrl: './estadisticas-proceso-directivo.component.html',
  styleUrls: ['./estadisticas-proceso-directivo.component.scss']
})
export class EstadisticasProcesoDirectivoComponent implements OnInit {

  indicadoresMat:boolean = false;
  indicadoresProd:boolean = false;

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  data: any;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
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
  


