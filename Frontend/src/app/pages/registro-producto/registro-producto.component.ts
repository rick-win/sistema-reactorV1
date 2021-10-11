import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Product} from "../../models/product";
import {ReportsManagerService} from "../../services/reports-manager.service";

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.scss']
})
export class RegistroProductoComponent implements OnInit {

  formulary: FormGroup;

  product: Product = {
    reportTime: new Date(),
    classification: '',
    description: '',
    measureUnit: "",
    amount: 0,
    producedAmount: 0,
    startDate: new Date(),
    endDate:new Date()
  }

  constructor(private reportsService: ReportsManagerService) {
    this.formulary = new FormGroup({});
  }

  ngOnInit(): void {
  }

  registerProduct(){
    delete this.product.id;
    delete this.product.reportTime;

    this.reportsService.registerProduct(this.product).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

}
