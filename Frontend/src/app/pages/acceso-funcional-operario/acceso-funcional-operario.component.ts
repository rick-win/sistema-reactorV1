import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject, Subscriber, Subscription, interval} from 'rxjs';
import {AuthApiService} from "../../services/auth-api.service";
import {SensorReadingGestorService} from "../../services/sensor-reading-gestor.service";
import {Lectura_SensorFull} from "../../models/Lectura_Sensor";


@Component({
  selector: 'app-acceso-funcional-operario',
  templateUrl: './acceso-funcional-operario.component.html',
  styleUrls: ['./acceso-funcional-operario.component.scss']
})
export class AccesoFuncionalOperarioComponent implements OnInit {

  indicadoresMat:boolean = false;
  indicadoresProd:boolean = false;

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  data: any;
  sensorReadings: Lectura_SensorFull[] = [];
  sub: Subscription;

  username: string
  nameUser: string

  constructor(
    private authApi: AuthApiService,
    private sensorReads: SensorReadingGestorService,
    public router: Router
  ) {
    this.sub = interval(5000)
      .subscribe((val) => {
        this.getTemps()
      });
  }

  getTemps(){
    const res = this.sensorReads.getSensorReading().subscribe(
      res => {
        this.data = res;
        this.sensorReadings = this.data;
        console.log('Temps',this.sensorReadings)
      },
      error => {console.log(error);
        console.log(res)
      }
    )
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 6,
      language : {
        url :'//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };
    this.getTemps()
    this.dtTrigger.next();
    this.username = localStorage.getItem('Username');
    this.nameUser = localStorage.getItem('Name')
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  logOut(): void {
    this.authApi.logout();
    this.router.navigate(['/login'])
  }

}
