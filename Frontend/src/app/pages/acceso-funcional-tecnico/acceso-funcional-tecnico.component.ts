import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {interval, Subject, Subscriber, Subscription} from 'rxjs';
import {SensorReadingGestorService} from "../../services/sensor-reading-gestor.service";
import {Lectura_SensorFull} from "../../models/Lectura_Sensor";
import {AuthApiService} from "../../services/auth-api.service";


@Component({
  selector: 'app-acceso-funcional-tecnico',
  templateUrl: './acceso-funcional-tecnico.component.html',
  styleUrls: ['./acceso-funcional-tecnico.component.scss']
})
export class AccesoFuncionalTecnicoComponent implements OnInit {

  indicadoresMat:boolean = false;
  indicadoresProd:boolean = false;

  dtOptions: any = {};
  sensorReadings: Lectura_SensorFull[] = [];
  dtTrigger = new Subject();
  data: any;
  sub: Subscription;

  constructor(
    private http : HttpClient,
    public router: Router,
    private authApi: AuthApiService,
    private sensorReads: SensorReadingGestorService,
  ) {
    this.sub = interval(5000)
      .subscribe((val) => {
        this.getTemps()
      }); }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 6,
      language : {
        url :'//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };
    this.dtTrigger.next();
  };



  getTemps(){
    const res = this.sensorReads.getSensorReading().subscribe(
      res => {
        this.data = res;
        this.sensorReadings = this.data;

        console.log('Temps',this.data)
        console.log('Temps',this.sensorReadings)
      },
      error => {console.log(error);
        console.log(res)
      }
    )
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    }


  logOut(): void {
    this.authApi.logout();
    this.router.navigate(['/login'])
  }

}
