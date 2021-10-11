import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ReportsManagerService} from "../../services/reports-manager.service";
import {Process} from "../../models/process";

@Component({
  selector: 'app-reporte-proceso-operario',
  templateUrl: './reporte-proceso-operario.component.html',
  styleUrls: ['./reporte-proceso-operario.component.scss']
})
export class ReporteProcesoOperarioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private reportsService: ReportsManagerService) {
    this.formulario = new FormGroup({});
  }

  process: Process = {
    id: 0,
    reportTime: new Date(),
    date: new Date(),
    operator: "",
    powerVerify: false,
    closeVerify: false,
    success: false,
    annotations: ''
  }


  ngOnInit(): void {
  }
  registerProcess(){
  delete this.process.id;
  delete this.process.reportTime;

  this.reportsService.registerProcess(this.process).subscribe(
    res => {
      console.log(res)
    },
    err => console.error(err)
  )
  };
}
