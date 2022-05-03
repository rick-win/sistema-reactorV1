import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ProcessGestorService} from "../../services/process-gestor.service";
import {FormGroup} from "@angular/forms";
import {FormControl} from "@angular/forms"
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProcesoFull} from "../../models/Proceso";
import {Registro_ProductoFull} from "../../models/Registro_Producto";
import {ProductGestorService} from "../../services/product-gestor.service";
import {Control_ProduccionFull} from "../../models/Control_Produccion";
import {ProductionGestorService} from "../../services/production-gestor.service";

@Component({
  selector: 'app-reporte-proceso-operario',
  templateUrl: './reporte-proceso-operario.component.html',
  styleUrls: ['./reporte-proceso-operario.component.scss']
})
export class ReporteProcesoOperarioComponent implements OnInit {

  indicadoresMat:boolean = false;
  indicadoresProd:boolean = false;

  registeringProcess: boolean
  registeringHopper: boolean
  registeringProduction: boolean
  registeringProduct: boolean
  currentEdition: number;
  result: string;

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  products: Registro_ProductoFull[] = [];
  productions: Control_ProduccionFull[] = [];
  productFilled: number[] = [];
  productionFilled: number[] = [];
  processData: any = {};
  productData: any = {};
  productionData: any = {};

  newProcessToSend: ProcesoFull = {
    operador_Proceso: '',
    verificarCierre_Proceso: false,
    verificarEnergia_Proceso: false,
    horaCorrida_Proceso: new Date(),
    prod_Data: '',
    annotations_Proceso: '',
    success_proceso: false
  }

  newProductToSend: Registro_ProductoFull = {
    parentProcess: 0,
    cantProducto_regProducto: 0,
    tipoProducto_regProducto: '',
    subProducto_regProducto: '',
    unidadMedida_regProducto: '',
    detalle_regProducto: '',
  }

  newProductionToSend: Control_ProduccionFull = {
    id_contProduction: 0,
    externalProcess: 0,

    fechaInicio_contProduction: new Date(),
    fechaFin_contProduction: new Date(),

    tipoIngreso_contProduction: '',
    cantIngreso_contProduction: 0,
    unidadIngreso_contProduction: '',

    tipoSolido_contProduction: '',
    cantSolido_contProduction: 0,
    unidadSolido_contProduction: '',

    tipoGas_contProduction: '',
    cantGas_contProduction: 0,
    unidadGas_contProduction: '',

    tipoLiquido_contProduction: '',
    cantLiquido_contProduction: 0,
    unidadLiquido_contProduction: '',

  }

  // noinspection SpellCheckingInspection
  constructor(private processSvc: ProcessGestorService,
              private productSvc: ProductGestorService,
              private prdtionSvc: ProductionGestorService) {
  }

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
          fieldSeparator: ';',
          exportOption: [1, 2, 3]
        },
        'excel'
      ]
    }
    this.getProcesses()
  }

  getProcesses(){
    const res = this.processSvc.getProcess().subscribe(
      res => {
        this.processData = res;
        console.log(this.processData)
        this.getProduction()
        this.getProducts()
        this.dtTrigger.next()
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
        console.log('Products saved as array: ', this.products)
      },
      error => {console.log(error);
        console.log(res)
      }
    )
  }
  getProduction(){
    const res = this.prdtionSvc.getProduction().subscribe(
      res => {
        this.productionData = res;
        this.productions = this.productionData
        this.productionArrayFiller()
        console.log('Production records: ',this.productionData)
      },
      error => {console.log(error);
        console.log(res)
      }
    )
  }

  productsArrayFiller(): void {
    this.products.forEach(item=>{
      this.productFilled.push(
        item.parentProcess
      )
    })
  }
  productionArrayFiller(): void {
    this.productions.forEach(item=>{
      this.productionFilled.push(
        item.externalProcess
      )
    })
    console.log('Production IDs ',this.productionFilled)
  }


  showFormulary(type: string, parentID: number): void{
    this.currentEdition = parentID
    switch (type) {
      case 'new': {
        this.registeringProcess = true;
        this.registeringHopper = false;
        this.registeringProduction = false;
        this.registeringProduct = false;
        break;
      }
      case 'hopper': {
        this.registeringProcess = false;
        this.registeringHopper = true;
        this.registeringProduction = false;
        this.registeringProduct = false;
        break;
      }
      case 'production': {
        this.newProductionToSend = {
          id_contProduction: 0,
          externalProcess: 0,

          fechaInicio_contProduction: new Date(),
          fechaFin_contProduction: new Date(),

          tipoIngreso_contProduction: '',
          cantIngreso_contProduction: 0,
          unidadIngreso_contProduction: '',

          tipoSolido_contProduction: '',
          cantSolido_contProduction: 0,
          unidadSolido_contProduction: '',

          tipoGas_contProduction: '',
          cantGas_contProduction: 0,
          unidadGas_contProduction: '',

          tipoLiquido_contProduction: '',
          cantLiquido_contProduction: 0,
          unidadLiquido_contProduction: '',

        }
        this.newProductionToSend.externalProcess = parentID;
        this.registeringProcess = false;
        this.registeringHopper = false;
        this.registeringProduction = true;
        this.registeringProduct = false;
        break;
      }
      case 'product': {
        this.newProductToSend = {
          parentProcess: 0,
          cantProducto_regProducto: 0,
          tipoProducto_regProducto: '',
          subProducto_regProducto: '',
          unidadMedida_regProducto: '',
          detalle_regProducto: '',
        }
        this.newProductToSend.parentProcess = parentID;
        this.registeringProcess = false;
        this.registeringHopper = false;
        this.registeringProduction = false;
        this.registeringProduct = true;
        break;
      }
    }
  }

  newProcess(){
    this.newProcessToSend.operador_Proceso = localStorage.getItem('Username')
    console.log('New process = ', this.newProcessToSend)
    const res = this.processSvc.saveProcess(this.newProcessToSend).subscribe(
      res => {
        this.result = JSON.stringify(res)
        this.result = JSON.parse(this.result).message
        this.getProcesses()
        console.log(this.result)
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
        this.getProcesses()
        console.log(this.result)
      },
      error => {console.log(error);
        console.log('Error')
        console.log(res)
      }
    )
  }
  newProduction(){
    console.log('New production = ', this.newProductionToSend)
    const res = this.prdtionSvc.saveProduction(this.newProductionToSend).subscribe(
      res => {
        this.result = JSON.stringify(res)
        this.result = JSON.parse(this.result).message
        this.getProcesses()
        console.log(this.result)
      },
      error => {console.log(error);
        console.log('Error')
        console.log(res)
      }
    )
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
