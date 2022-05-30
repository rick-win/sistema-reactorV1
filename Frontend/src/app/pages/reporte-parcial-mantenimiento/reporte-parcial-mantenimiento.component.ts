import { Component, OnInit } from '@angular/core';
import { Subject, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reporte-parcial-mantenimiento',
  templateUrl: './reporte-parcial-mantenimiento.component.html',
  styleUrls: ['./reporte-parcial-mantenimiento.component.scss']
})
export class ReporteParcialMantenimientoComponent implements OnInit {

  indicadoresMat:boolean = false;
  indicadoresProd:boolean = false;

  dtOptions: any = {};
  dtTrigger = new Subject();
  data: any;

  constructor(private http : HttpClient) { }

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
    this.dtTrigger.next();
    }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    }

}
