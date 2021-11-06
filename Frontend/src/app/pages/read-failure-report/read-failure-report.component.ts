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

  Failures: any = [];


  ngOnInit(): void {
    console.log('start')
    this.reportService.getFailures().subscribe(
      res => {
        this.Failures = res;
        console.log(res)
      },
      err => console.log(err, 'sad')
    )
  }
}
