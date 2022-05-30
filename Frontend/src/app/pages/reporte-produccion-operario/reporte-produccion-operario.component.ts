import { Component,OnDestroy ,OnInit } from '@angular/core';
import { Subject, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ProductionGestorService} from "../../services/production-gestor.service";

@Component({
  selector: 'app-reporte-produccion-operario',
  templateUrl: './reporte-produccion-operario.component.html',
  styleUrls: ['./reporte-produccion-operario.component.scss']
})

export class ReporteProduccionOperarioComponent implements OnInit {

  indicadoresMat:boolean = false;
  indicadoresProd:boolean = false;

  productionData: any = {};
  dtOptions: any = {};
  dtTrigger = new Subject();
  data: any;

  constructor(private prdtionSvc: ProductionGestorService,) { }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'colvis',
        'copy',
        {
          extend: 'csv',
          text: 'CSV export',
          fieldSeparator: '; ',
          exportOption: [1, 2, 3]
        },
        'excel'
      ]
    }
    this.getProductions()
    this.dtTrigger.next()
  }

  getProductions(){
    const res = this.prdtionSvc.getProduction().subscribe(
      res => {
        this.productionData = res;
        console.log('Production records: ',this.productionData)
        this.dtTrigger.next()
      },
      error => {console.log(error);
        console.log(res)
        this.dtTrigger.next()
      }
    )
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    }

}
