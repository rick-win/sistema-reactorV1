import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ReportsManagerService} from "../../services/reports-manager.service";
import {Production} from "../../models/production";

@Component({
  selector: 'app-reporte-produccion-operario',
  templateUrl: './reporte-produccion-operario.component.html',
  styleUrls: ['./reporte-produccion-operario.component.scss']
})

export class ReporteProduccionOperarioComponent implements OnInit {

  formulary: FormGroup;

  production:Production = {
    Id_Production: 0,
    Tiempo_Reporte: new Date(),
    Fecha_Inicio: new Date(),
    Fecha_Finalizacion: new Date(),
    Tipo_Ingreso: '',
    Cantidad_Ingreso: '',
    Unidad_Ingreso: '',
    Cantidad_Liquido: 0,
    Cantidad_Solido: 0,
    Cantidad_Gas: 0,
    Unidad_Gas: '',
    Unidad_Liquido: '',
    Unidad_Solido: '',
    Tipo_Liquido: '',
    Tipo_Solido: '',
    Tipo_Gas: '',
  }

  constructor(private reportsService:ReportsManagerService) {
    this.formulary = new FormGroup({
      Fecha_Inicio: new FormControl(Date()),
      Fecha_Finalizacion: new FormControl(Date()),
      Tipo_Ingreso: new FormControl(''),
      Cantidad_Ingreso: new FormControl(''),
      Unidad_Ingreso: new FormControl(''),
      Cantidad_Liquido: new FormControl(0),
      Cantidad_Solido: new FormControl(0),
      Cantidad_Gas: new FormControl(0),
      Unidad_Gas: new FormControl(''),
      Unidad_Liquido: new FormControl(''),
      Unidad_Solido: new FormControl(''),
      Tipo_Liquido: new FormControl(''),
      Tipo_Solido: new FormControl(''),
      Tipo_Gas: new FormControl(''),
    });
  }

  onSubmit():void{
    this.production.Fecha_Inicio = this.formulary.get('Fecha_Inicio')?.value
    this.production.Fecha_Finalizacion = this.formulary.get('Fecha_Finalizacion')?.value
    this.production.Tipo_Ingreso = this.formulary.get('Tipo_Ingreso')?.value
    this.production.Cantidad_Ingreso = this.formulary.get('Cantidad_Ingreso')?.value
    this.production.Unidad_Ingreso = this.formulary.get('Unidad_Ingreso')?.value
    this.production.Cantidad_Liquido = this.formulary.get('Cantidad_Liquido')?.value
    this.production.Cantidad_Solido = this.formulary.get('Cantidad_Solido')?.value
    this.production.Cantidad_Gas = this.formulary.get('Cantidad_Gas')?.value
    this.production.Unidad_Gas = this.formulary.get('Unidad_Gas')?.value
    this.production.Unidad_Liquido = this.formulary.get('Unidad_Liquido')?.value
    this.production.Unidad_Solido = this.formulary.get('Unidad_Solido')?.value
    this.production.Tipo_Liquido = this.formulary.get('Tipo_Liquido')?.value
    this.production.Tipo_Solido = this.formulary.get('Tipo_Solido')?.value
    this.production.Tipo_Gas = this.formulary.get('Tipo_Gas')?.value
    // console.log(this.production)
  }

  ngOnInit(): void {
  }
  registerProduction(){
  delete this.production.Id_Production;
  delete this.production.Tiempo_Reporte;
  this.onSubmit();
  this.reportsService.registerProduction(this.production).subscribe(
    res => {
      console.log(res)
    },
    err => console.error(err)
  )
  }
}
