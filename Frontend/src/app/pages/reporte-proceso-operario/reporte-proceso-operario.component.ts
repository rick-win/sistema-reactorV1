import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ReportsManagerService} from "../../services/reports-manager.service";
import {Process} from "../../models/process";

@Component({
  selector: 'app-reporte-proceso-operario',
  templateUrl: './reporte-proceso-operario.component.html',
  styleUrls: ['./reporte-proceso-operario.component.scss']
})
export class ReporteProcesoOperarioComponent implements OnInit {

  formulary: FormGroup;

  constructor(private reportsService: ReportsManagerService) {
    this.formulary = new FormGroup({
      date: new FormControl(Date),
      operator: new FormControl(''),
      powerVerify: new FormControl(Boolean),
      closeVerify: new FormControl(Boolean),
      temp: new FormControl(''),
      config: new FormControl(''),
      production: new FormControl(''),
      success: new FormControl(Boolean),
      annotations: new FormControl(''),
      hopperIn: new FormControl(''),
      hopperAmount: new FormControl(0),
      hopperMU: new FormControl(''),
      catalyst: new FormControl(0)
    });
  }

  process: Process = {
    Id_Proceso: 0,
    reportTime_Proceso: new Date(),
    date_Proceso: new Date(),
    temp_Start: 0,
    initial_Config: '',
    prod_Data: '',
    operator_Proceso: "",
    powerVerify_Proceso: false,
    closeVerify_Proceso: false,
    success_Proceso: false,
    annotations_Proceso: ''
  }

  onSubmit():void{
    this.process.date_Proceso = this.formulary.get('date')?.value
    this.process.operator_Proceso = this.formulary.get('operator')?.value
    this.process.powerVerify_Proceso = this.formulary.get('powerVerify')?.value
    this.process.closeVerify_Proceso = this.formulary.get('closeVerify')?.value
    this.process.temp_Start = this.formulary.get('temp')?.value
    this.process.initial_Config = this.formulary.get('config')?.value
    this.process.prod_Data = this.formulary.get('production')?.value
    this.process.success_Proceso = this.formulary.get('success')?.value
    this.process.annotations_Proceso = this.formulary.get('annotations')?.value
    console.log(this.process)
  }

  ngOnInit(): void {
  }

  registerProcess(){
  delete this.process.Id_Proceso;
  delete this.process.reportTime_Proceso;
  this.onSubmit()

  this.reportsService.registerProcess(this.process).subscribe(
    res => {
      console.log(res)
    },
    err => console.error(err)
  )
  };
}
