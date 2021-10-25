import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule} from "@angular/forms";
import {Failure} from "../../models/failure";
import {ReportsManagerService} from "../../services/reports-manager.service";

@Component({
  selector: 'app-reporte-bitacora-eventos-operario',
  templateUrl: './reporte-bitacora-eventos-operario.component.html',
  styleUrls: ['./reporte-bitacora-eventos-operario.component.scss']
})
export class ReporteBitacoraEventosOperarioComponent implements OnInit {

  formulary: FormGroup;

  failureReport: Failure = {
    Sensor_Id_Sensor: 0,
    Alarma_Id_Alarma: 0,
    Fecha_Hora_LogAlarma: new Date(),
    Usuario_Proceso_LogAlarma: '',
    Error_Falla_Indicente_LogAlarma: '',
    Nom_Zona: '',
    Descripcion_LogAlarma: '',
    Estado_LogAlarma: false,
    Anotaciones_LogAlarma: '',
    Mensaje: 0,
    Fecha_Resol: new Date()
  }

  constructor(private reportsService: ReportsManagerService) {
    this.formulary = new FormGroup({
      reporter: new FormControl(''),
      failureType: new  FormControl (""),
      zone: new  FormControl (""),
      failureDesc: new  FormControl (''),
      solved: new  FormControl (false),
      annotations: new  FormControl (''),
      solveDate: new FormControl(Date())
    });
  }

  ngOnInit(): void {
  }

  onSubmit():void{
    this.failureReport.Error_Falla_Indicente_LogAlarma = this.formulary.get('failureType')?.value
    this.failureReport.Usuario_Proceso_LogAlarma = this.formulary.get('reporter')?.value
    this.failureReport.Nom_Zona = this.formulary.get('zone')?.value
    this.failureReport.Descripcion_LogAlarma = this.formulary.get('failureDesc')?.value
    this.failureReport.Estado_LogAlarma = this.formulary.get('solved')?.value
    this.failureReport.Anotaciones_LogAlarma = this.formulary.get('annotations')?.value
    this.failureReport.Fecha_Resol = this.formulary.get('solveDate')?.value
    console.log(this.failureReport)
  }

  registerFailure(){
    delete this.failureReport.Alarma_Id_Alarma;
    delete this.failureReport.Fecha_Hora_LogAlarma;
    this.onSubmit()
    console.log('TryingRegistry')
    this.reportsService.registerFailure(this.failureReport).subscribe(
      res => {
        console.log(res)
        console.log('TryingRegistry2')
      },
      err => console.error(err)
    )
  }
}
