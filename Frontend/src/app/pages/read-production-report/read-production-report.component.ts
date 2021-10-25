import { Component, OnInit } from '@angular/core';
import {ReportsManagerService} from "../../services/reports-manager.service";
import {Production} from "../../models/production";

@Component({
  selector: 'app-read-production-report',
  templateUrl: './read-production-report.component.html',
  styleUrls: ['./read-production-report.component.scss']
})
export class ReadProductionReportComponent implements OnInit {

  constructor( private reportService: ReportsManagerService) { }

  reports: any = [];

  ngOnInit(): void {
    this.reportService.getProduction().subscribe(
      res => {
        this.reports = res;
        console.log(this.reports[1])
      },
      err => console.log(err)
    )
  }
}
