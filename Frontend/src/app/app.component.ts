import { Component, OnInit} from '@angular/core';
import {ReportsManagerService} from './services/reports-manager.service'
import {interval, Subscription} from "rxjs";
import {takeWhile} from "rxjs/operators";
import {Failure} from "./models/failure";
import {error} from "jquery";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  alarmCode: any;
  intervalId!: number;

  constructor(private reportsService: ReportsManagerService,
              private toaster: ToastrService) { }

  ngOnInit() {
    this.intervalId = setInterval(() => this.alarmWatcher(), 3000);
  }

  alarmWatcher(): void {
    this.reportsService.checkFailure().subscribe(
      res => {
        this.alarmCode = res;
      },
      err => console.log(err)
    )
    if (this.alarmCode.Mensaje != 0){
      this.toaster.error('Error: ' + this.alarmCode.Mensaje)
    }
  }

  ngOnDestroy() {
    // For method 1
    //this.subscription.unsubscribe();

    // For method 2
    clearInterval(this.intervalId);
  }
  title = 'Frontend';
}
