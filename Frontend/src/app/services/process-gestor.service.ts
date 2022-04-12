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

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class ProcessGestorService {

  private userInfo: ProcesoFull;

  constructor(private http: HttpClient) { }

  getProcess(){
    const res = this.http.get(`${environment.API_URL}/Process`);
    if (res) {
      console.log('Data obtained in service = ', res)
    }
    return res
  }

  getProcessById(id: number){
    const res = this.http.get(`${environment.API_URL}/Process/${id}`);
    console.log('Data obtained in service = ', res)
    return res
  }

  deleteProcess(id: number){
    return this.http.delete(`${environment.API_URL}/Process/${id}`);
  }

  saveProcess(Process: ProcesoFull){
    console.log(`${environment.API_URL}/Process`);
    return this.http.post(`${environment.API_URL}/Process`, Process);
  }

  updateProcess(id: number, updatedProcess: any){
    return this.http.patch(`${environment.API_URL}/Process/${id}`, updatedProcess);
  }
}
