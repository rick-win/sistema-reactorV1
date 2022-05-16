import { Component, OnInit } from '@angular/core';
import { DatatablesComponent } from '../datatables/datatables.component';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {Subject, Subscriber, Subscription} from 'rxjs';
import {AuthApiService} from "../../services/auth-api.service";
import {SensorReadingGestorService} from "../../services/sensor-reading-gestor.service";
import {Lectura_SensorFull} from "../../models/Lectura_Sensor";

@Component({
  selector: 'app-acceso-funcional-directivo',
  templateUrl: './acceso-funcional-directivo.component.html',
  styleUrls: ['./acceso-funcional-directivo.component.scss']
})
export class AccesoFuncionalDirectivoComponent implements OnInit {

  indicadoresMat:boolean = false;
  indicadoresProd:boolean = false;

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  data: any;
  data2: any;
  sensorReadings: Lectura_SensorFull[] = [];
  sub: Subscription;

  username: string;
  nameUser: string;

  constructor(
    private authApi: AuthApiService,
    private sensorReads: SensorReadingGestorService,
    public router: Router
  ) {
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 6,
      language : {
        url :'//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };
    this.username = localStorage.getItem('Username');
    this.nameUser = localStorage.getItem('Name');
  }

  getTemps(){
    const res = this.sensorReads.getSensorReading().subscribe(
      res => {
        this.data = res;
        this.sensorReadings = this.data2;

        console.log('Temps',this.data2)
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
