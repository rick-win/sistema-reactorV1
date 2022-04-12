import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ProcessGestorService} from "../../services/process-gestor.service";
import {FormGroup} from "@angular/forms";
import {FormControl} from "@angular/forms"
import {ProcesoFull} from "../../models/Proceso";
import {Registro_ProductoFull} from "../../models/Registro_Producto";

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

  dtOptions: any = {};
  dtTrigger = new Subject();
  data: any = {};

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
    cantProducto_regProducto: 0,
    tipoProducto_regProducto: '',
    subProducto_regProducto: '',
    unidadMedida_regProducto: '',
    detalle_regProducto: '',
  }

  constructor(private processSvc: ProcessGestorService) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'data/data.json',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }],
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel',
        {
          text: 'Some button',
          key: '1',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }
      ],

      pagingType: 'full_numbers',
      pageLength: 5,
      language : {
        url :'//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };
    this.getProcesses()
  }

  getProcesses(){
    const res = this.processSvc.getProcess().subscribe(
      res => {
        this.data = res;
        console.log(this.data)
      },
      error => {console.log(error);
      console.log(res)
      }
    )
  }

  showFormulary(type: string): void{
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
        this.registeringProcess = false;
        this.registeringHopper = false;
        this.registeringProduction = true;
        this.registeringProduct = false;
        break;
      }
      case 'product': {
        this.registeringProcess = false;
        this.registeringHopper = false;
        this.registeringProduction = false;
        this.registeringProduct = true;
        break;
      }
    }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  newProcess(){
    console.log(this.newProcessToSend)
    const res = this.processSvc.saveProcess(this.newProcessToSend).subscribe(
      res => {
        console.log(res)
      },
      error => {console.log(error);
        console.log(res)
      }
    )
  }
}
