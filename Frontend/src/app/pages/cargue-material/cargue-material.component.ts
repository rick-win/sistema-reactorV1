import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Registro_ProductoFull} from "../../models/Registro_Producto";
import {ProductGestorService} from "../../services/product-gestor.service";
import {ProcessGestorService} from "../../services/process-gestor.service";
import {ProcesoFull} from "../../models/Proceso";
import {interval, Subscription} from "rxjs";
import {HopperCheckService} from "../../services/hopper-check.service";
import {TolvaFull} from "../../models/Tolva";

@Component({
  selector: 'app-cargue-material',
  templateUrl: './cargue-material.component.html',
  styleUrls: ['./cargue-material.component.scss']
})
export class CargueMaterialComponent implements OnInit {

  products: Registro_ProductoFull[] = [];
  productFilled: number[] = [];
  productData: any = {};
  processes: ProcesoFull[] = [];
  processFilled: number[] = [];
  processData: any = {};
  productsToFill: number[] = [];
  hopperArray: TolvaFull[] = [];
  hopperStatus: any = {}
  openClose: string;

  result: string;
  sub: Subscription;
  newProductToSend: Registro_ProductoFull = {
    parentProcess: 0,
    cantProducto_regProducto: 0,
    tipoProducto_regProducto: '',
    catalizador: false,
    catalizador_Cant: 0,
    catalizador_Med: '',
    unidadMedida_regProducto: '',
    detalle_regProducto: '',
  }

  constructor(private productSvc: ProductGestorService,
              private processSvc: ProcessGestorService,
              private hopperData: HopperCheckService
              )  {
    this.sub = interval(5000)
      .subscribe((val) => {
        this.getHopperStatus()
      });
  }

  ngOnInit(): void {
    this.getHopperStatus()
  }

  getHopperStatus(){
    const res = this.hopperData.getHopper().subscribe(
      res => {
        this.hopperStatus = res;
        this.hopperArray = this.hopperStatus
      },
      error => {console.log(error);
        console.log(res)
      }
    )
    if (this.hopperArray[0].indicadorPresion_Tolva < 100 && this.hopperArray[0].tiempoSostenimiento_Tolva < 120){
      this.openClose = 'Open'
    } else {
      this.openClose = 'Closed'
    }
  }

  getProcesses(){
    const res = this.processSvc.getProcess().subscribe(
      res => {
        this.processData = res;
        this.processes = this.processData
        console.log(this.processData)
        this.getProducts()
      },
      error => {console.log(error);
        console.log(res)
      }
    )
  }

  getProducts(){
    const res = this.productSvc.getproduct().subscribe(
      res => {
        this.productData = res;
        this.products = this.productData
        this.productsArrayFiller()
        console.log('Products :',this.productData)
        console.log('Products saved as array in hopper: ', this.products)
      },
      error => {console.log(error);
        console.log(res)
      }
    )
  }

  newProduct(){
    console.log('New product = ', this.newProductToSend)
    const res = this.productSvc.saveproduct(this.newProductToSend).subscribe(
      res => {
        this.result = JSON.stringify(res)
        this.result = JSON.parse(this.result).message
        this.newProductToSend = {
          parentProcess: 0,
          cantProducto_regProducto: 0,
          tipoProducto_regProducto: '',
          catalizador: false,
          catalizador_Cant: 0,
          catalizador_Med: '',
          unidadMedida_regProducto: '',
          detalle_regProducto: '',
        }
        this.getProcesses()
        console.log(this.result)
      },
      error => {console.log(error);
        console.log('Error')
        console.log(res)
        this.newProductToSend = {
          parentProcess: 0,
          cantProducto_regProducto: 0,
          tipoProducto_regProducto: '',
          catalizador: false,
          catalizador_Cant: 0,
          catalizador_Med: '',
          unidadMedida_regProducto: '',
          detalle_regProducto: '',
        }
      }
    )
  }

  processArrayFiller(){
    this.processes.forEach(item =>{
      this.processFilled.push(
        item.id_Proceso
      )
    })
  }

  productsArrayFiller(): void {
    this.products.forEach(item=>{
      this.productFilled.push(
        item.parentProcess
      )
    })
  }
}
