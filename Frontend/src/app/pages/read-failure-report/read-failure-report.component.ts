import { Component, OnInit } from '@angular/core';
import { ReportsManagerService } from '../../services/reports-manager.service'
import { Failure } from '../../models/failure'

@Component({
  selector: 'app-read-failure-report',
  templateUrl: './read-failure-report.component.html',
  styleUrls: ['./read-failure-report.component.scss']
})
export class ReadFailureReportComponent implements OnInit {

  constructor( private reportService: ReportsManagerService) { }

  reports: any = [];

  ngOnInit(): void {
    this.reportService.getFailures().subscribe(
      res => {
        this.reports = res;
      },
      err => console.log()
    )
  }
}
