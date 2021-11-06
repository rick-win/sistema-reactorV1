import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CheckListHandlerService {

  API_URI = 'http://localhost:3000/sistemaReactor';

  constructor(private httpClient: HttpClient) { }

  getLidState(){

  }
  getPowerState(){

  }
  getLoadState(){

  }
}
