import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
    id: 0,
    reportTime: new Date(),
    date: new Date(),
    failureType: ",",
    zone: "",
    failureDesc: '',
    solved: false,
    annotations: ''
  }

  constructor(private reportsService: ReportsManagerService) {
    this.formulary = new FormGroup({});
  }

  ngOnInit(): void {
  }

  registerFailure(){
    delete this.failureReport.id;
    delete this.failureReport.reportTime;
    this.reportsService.registerFailure(this.failureReport).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }
}
