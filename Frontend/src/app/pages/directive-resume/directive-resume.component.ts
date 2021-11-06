import { Component, OnInit } from '@angular/core';
import {ReportsManagerService} from "../../services/reports-manager.service";

@Component({
  selector: 'app-directive-resume',
  templateUrl: './directive-resume.component.html',
  styleUrls: ['./directive-resume.component.scss']
})
export class DirectiveResumeComponent implements OnInit {

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
