import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reporte-proceso-operario',
  templateUrl: './reporte-proceso-operario.component.html',
  styleUrls: ['./reporte-proceso-operario.component.scss']
})
export class ReporteProcesoOperarioComponent implements OnInit {

  indicadoresMat:boolean = false;
  indicadoresProd:boolean = false;

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  data: any = [];

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language : {
        url :'//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };
  }

  getProcesses(){
    // const res = this.http.get().subscribe(
    //   res => {
    //     this.data = res;
    //     console.log(this.data)
    //   },
    //   error => {console.log(error)}
    // )
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    }


}
