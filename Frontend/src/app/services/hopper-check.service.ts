import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HopperCheckService {


  constructor(private http: HttpClient) { }

  getHopper(){
    const res = this.http.get(`${environment.API_URL}/hopper`);
    if (res) {
      console.log('Data obtained in service = ', res)
    }
    return res
  }
}
