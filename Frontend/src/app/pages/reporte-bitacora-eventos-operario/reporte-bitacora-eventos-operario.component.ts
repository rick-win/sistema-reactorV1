import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import {ProcessGestorService} from "../../services/process-gestor.service";
import {ProcesoFull} from "../../models/Proceso";
import {Registro_ProductoFull} from "../../models/Registro_Producto";
import {ProductGestorService} from "../../services/product-gestor.service";
import {Control_ProduccionFull} from "../../models/Control_Produccion";
import {ProductionGestorService} from "../../services/production-gestor.service";
import {Incidencia} from "../../models/Incidencia";
import {IncidentGestorService} from "../../services/incident-gestor.service";

@Component({
  selector: 'app-reporte-bitacora-eventos-operario',
  templateUrl: './reporte-bitacora-eventos-operario.component.html',
  styleUrls: ['./reporte-bitacora-eventos-operario.component.scss']
})
export class ReporteBitacoraEventosOperarioComponent implements OnInit, OnDestroy {

  indicadoresMat:boolean = false;
  indicadoresProd:boolean = false;

  result: string;
  annotations: string;
  solved: boolean = false;

  opAct:string = localStorage.getItem('Username')

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  data: any;

  incidentToSend: Incidencia = {
    operario_Incidencia: '',
    incidente_Incidencia: '',
    zona_Incidencia:'',
    desc_Incidencia:'',
    resuelto_Incidencia: false,
    annotations_Incidencia: '',
  }

  constructor(private http : HttpClient, private incSvc: IncidentGestorService) { }

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
    this.getIncidents()
  }

  getIncidents(){
    const res = this.incSvc.getIncident().subscribe(
      res => {
        this.data = res;
        console.log(this.data)
        this.dtTrigger.next()
      },
      error => {console.log(error);
        console.log(res)
      }
    )
  }

  newIncident(){
    this.incidentToSend.operario_Incidencia = localStorage.getItem('Username')
    this.incidentToSend.resuelto_Incidencia = this.solved;
    this.incidentToSend.annotations_Incidencia = this.solved? 'None' : this.annotations
    console.log('New incident = ', this.incidentToSend)
    const res = this.incSvc.saveIncident(this.incidentToSend).subscribe(
      res => {
        this.result = JSON.stringify(res)
        this.result = JSON.parse(this.result).message
        console.log(this.result)
        this.getIncidents()
      },
      error => {console.log(error);
        console.log('Error incidents')
        console.log(res)
        this.getIncidents()
      }
    )
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    }
  }


