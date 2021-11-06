import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { Process } from "../models/process";
import { Failure } from "../models/failure";
import {Production} from "../models/production";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ReportsManagerService {

  API_URI = 'http://localhost:3000/sistemaReactor';

  constructor(private http: HttpClient) { }

  tryDataBase(){
    return this.http.get(`${this.API_URI}/failure`);
    console.log('tried')
  }

  getFailures(){
    return this.http.get(`${this.API_URI}/failure`);
    console.log('tried')
  }

  checkFailure(){
    return this.http.get(`${this.API_URI}/failure/alarm`);
    console.log('Check')
  }

  registerFailure(failure: Failure){
    return this.http.post(`${this.API_URI}/failure`, failure)
    console.log('triedRegistryFailure')
  }

  getProcess(){
    return this.http.get(`${this.API_URI}/process`);
    console.log('tried')
  }
  registerProcess(process: Process){
    return this.http.post(`${this.API_URI}/process`, process)
    console.log('tried')
  }

  getProduct(){
    return this.http.get(`${this.API_URI}/product`);
    console.log('tried')
  }
  registerProduct(product: Product){
    return this.http.post(`${this.API_URI}/product`, product)
    console.log('tried')
  }

  getProduction(){
    return this.http.get(`${this.API_URI}/production`);
    console.log('tried')
  }
  registerProduction(production: Production){
    return this.http.post(`${this.API_URI}/production`, production)
    console.log('tried')
  }
}
