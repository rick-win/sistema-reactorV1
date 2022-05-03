import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import {error} from "jquery";
import {loggedIn} from "@angular/fire/auth-guard";
import {ProcesoFull} from "../models/Proceso";
import {Control_ProduccionFull} from "../models/Control_Produccion";

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class ProductionGestorService {

  private productionComplete: Control_ProduccionFull;

  constructor(private http: HttpClient) { }

  getProduction(){
    const res = this.http.get(`${environment.API_URL}/Production`);
    if (res) {
      console.log('Data obtained in service = ', res)
    }
    return res
  }

  getProductionById(id: number){
    const res = this.http.get(`${environment.API_URL}/Production/${id}`);
    console.log('Data obtained in service = ', res)
    return res
  }

  deleteProduction(id: number){
    return this.http.delete(`${environment.API_URL}/Production/${id}`);
  }

  saveProduction(Production: Control_ProduccionFull){
    console.log(`${environment.API_URL}/Production`);
    return this.http.post(`${environment.API_URL}/Production`, Production);
  }

  updateProduction(id: number, updatedProduction: any){
    return this.http.patch(`${environment.API_URL}/Production/${id}`, updatedProduction);
  }
}
