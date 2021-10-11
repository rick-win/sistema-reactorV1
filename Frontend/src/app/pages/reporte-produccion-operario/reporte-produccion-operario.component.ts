import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ReportsManagerService} from "../../services/reports-manager.service";
import {Production} from "../../models/production";

@Component({
  selector: 'app-reporte-produccion-operario',
  templateUrl: './reporte-produccion-operario.component.html',
  styleUrls: ['./reporte-produccion-operario.component.scss']
})
export class ReporteProduccionOperarioComponent implements OnInit {

  formulary: FormGroup;

  constructor(private reportsService:ReportsManagerService) {
    this.formulary = new FormGroup({});
  }

  production:Production = {
    id: 0,
    reportTime: new Date(),
    endDate: new Date(),
    startDate: new Date(),
    productType: '',
    productIn: 0,
    measureUnit: '',
    producedAmount: 0,
    activeProcess: false,
    advancePercentage: 0,
    remainingTime: '',
    state: '',
  }

  ngOnInit(): void {
  }
  registerProduction(){
  delete this.production.id;
  delete this.production.reportTime;

  this.reportsService.registerProduction(this.production).subscribe(
    res => {
      console.log(res)
    },
    err => console.error(err)
  )
  }
}
