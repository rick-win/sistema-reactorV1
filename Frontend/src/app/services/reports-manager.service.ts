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

  getFailures(){
    return this.http.get(`${this.API_URI}/failure`);
  }
  registerFailure(failure: Failure){
    return this.http.post(`${this.API_URI}/failure`, failure)
  }

  getProcess(){
    return this.http.get(`${this.API_URI}/process`);
  }
  registerProcess(process: Process){
    return this.http.post(`${this.API_URI}/process`, process)
  }

  getProduct(){
    return this.http.get(`${this.API_URI}/product`);
  }
  registerProduct(product: Product){
    return this.http.post(`${this.API_URI}/product`, product)
  }

  getProduction(){
    return this.http.get(`${this.API_URI}/production`);
  }
  registerProduction(production: Production){
    return this.http.post(`${this.API_URI}/production`, production)
  }
}
