import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import {error} from "jquery";
import {ProcesoFull} from "../models/Proceso";

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class SensorReadingGestorService {

  constructor(private http: HttpClient) { }

  getSensorReading(){
    const res = this.http.get(`${environment.API_URL}/sensorRead`);
    if (res) {
      console.log('Data obtained in service = ', res)
    }
    return res
  }

  getSensorReadingById(id: number){
    const res = this.http.get(`${environment.API_URL}/sensorRead/${id}`);
    console.log('Data obtained in service = ', res)
    return res
  }
}
