import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
    Id_Producto: 0,
    Fecha_Reporte: new Date(),
    Can_Producto: 0,
    Tipo: '',
    Sub_Producto: '',
    Detalle: '',
    Unidad_Medida: '',
  }

  constructor(private reportsService: ReportsManagerService) {
    this.formulary = new FormGroup({
      Can_Producto: new FormControl(0),
      Tipo: new FormControl(''),
      Sub_Producto: new FormControl(''),
      Detalle: new FormControl(''),
      Unidad_Medida: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit():void{
    this.product.Can_Producto = this.formulary.get('Can_Producto')?.value
    this.product.Tipo = this.formulary.get('Tipo')?.value
    this.product.Sub_Producto = this.formulary.get('Sub_Producto')?.value
    this.product.Detalle = this.formulary.get('Detalle')?.value
    this.product.Unidad_Medida = this.formulary.get('Unidad_Medida')?.value
    console.log(this.product)
  }

  registerProduct(){
    // delete this.product.Id_Producto;
    delete this.product.Fecha_Reporte;
    this.onSubmit()
    this.reportsService.registerProduct(this.product).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

}
