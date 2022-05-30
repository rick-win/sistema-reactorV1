import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {ProductGestorService} from "../../services/product-gestor.service";

@Component({
  selector: 'app-reporte-ingreso-operario',
  templateUrl: './reporte-ingreso-operario.component.html',
  styleUrls: ['./reporte-ingreso-operario.component.scss']
})
export class ReporteIngresoOperarioComponent implements OnInit {

  productData: any = {};

  dtOptions: any = {};
  dtTrigger = new Subject();
  data: any;

  constructor(private productSvc: ProductGestorService,) { }

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
    this.getProducts()
    this.dtTrigger.next()
  }


  getProducts(){
    const res = this.productSvc.getproduct().subscribe(
      res => {
        this.productData = res;
        console.log('Products :',this.productData)
        this.dtTrigger.next()
      },
      error => {console.log(error);
        console.log(res)
        this.dtTrigger.next()
      }
    )
  }

}
