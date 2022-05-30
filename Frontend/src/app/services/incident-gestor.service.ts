import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { error} from "jquery";
import { Incidencia } from "../models/Incidencia";

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class IncidentGestorService {

  constructor(private http: HttpClient) { }

  getIncident(){
    const res = this.http.get(`${environment.API_URL}/Incident`);
    if (res) {
      console.log('Data obtained in service = ', res)
    }
    return res
  }

  getIncidentById(id: number){
    const res = this.http.get(`${environment.API_URL}/Incident/${id}`);
    console.log('Data obtained in service = ', res)
    return res
  }

  deleteIncident(id: number){
    return this.http.delete(`${environment.API_URL}/Incident/${id}`);
  }

  saveIncident(Incident: Incidencia){
    console.log(`${environment.API_URL}/Incident`);
    return this.http.post(`${environment.API_URL}/Incident`, Incident);
  }

  updateIncident(id: number, updatedIncident: any){
    return this.http.patch(`${environment.API_URL}/Incident/${id}`, updatedIncident);
  }
}
