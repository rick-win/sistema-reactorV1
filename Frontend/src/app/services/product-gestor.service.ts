import { Injectable } from '@angular/core';
import {ProcesoFull} from "../models/Proceso";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Registro_ProductoFull} from "../models/Registro_Producto";

@Injectable({
  providedIn: 'root'
})
export class ProductGestorService {

  private userInfo: ProcesoFull;

  constructor(private http: HttpClient) { }

  getproduct(){
    const res = this.http.get(`${environment.API_URL}/product`);
    if (res) {
      console.log('Data obtained in service = ', res)
    }
    return res
  }

  getproductById(id: number){
    const res = this.http.get(`${environment.API_URL}/product/${id}`);
    console.log('Data obtained in service = ', res)
    return res
  }

  deleteproduct(id: number){
    return this.http.delete(`${environment.API_URL}/product/${id}`);
  }

  saveproduct(product: Registro_ProductoFull){
    console.log(`${environment.API_URL}/product`);
    return this.http.post(`${environment.API_URL}/product`, product);
  }

  updateproduct(id: number, updatedproduct: any){
    return this.http.patch(`${environment.API_URL}/product/${id}`, updatedproduct);
  }
}
