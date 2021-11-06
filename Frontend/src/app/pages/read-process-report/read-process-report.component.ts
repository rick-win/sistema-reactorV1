import { Component, OnInit } from '@angular/core';
import {ReportsManagerService} from "../../services/reports-manager.service";
import { Process } from '../../models/process'

@Component({
  selector: 'app-read-process-report',
  templateUrl: './read-process-report.component.html',
  styleUrls: ['./read-process-report.component.scss']
})
export class ReadProcessReportComponent implements OnInit {

  constructor( private reportService: ReportsManagerService) { }

  reports: any = [];

  ngOnInit(): void {
    this.reportService.getProcess().subscribe(
      res => {
        this.reports = res;
      },
      err => console.log()
    )
  }
}
