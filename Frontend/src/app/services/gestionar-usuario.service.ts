import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

import { UserResponse, User } from '../models/Usuario';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import {error} from "jquery";
import {UserFull} from "../models/usuario.model";

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class GestionarUsuarioService {

  private userInfo: UserFull;

  constructor(private http: HttpClient) { }

  getUsuarios(){
    const res = this.http.get(`${environment.API_URL}/users`);
    if (res) {
      console.log('Data obtained in service = ', res)
    }
    return res
  }

  getUsuarioById(id: number){
    const res = this.http.get(`${environment.API_URL}/users/${id}`);
    console.log('Data obtained in service = ', res)
    return res
  }

  deleteUsuario(id: number){
    return this.http.delete(`${environment.API_URL}/users/${id}`);
  }

  saveUsuario(usuario: UserFull){
    console.log(`${environment.API_URL}/users`);
    return this.http.post(`${environment.API_URL}/users`, usuario);
  }

  updateUsuario(id: number, updatedUsuario: any){
    return this.http.patch(`${environment.API_URL}/users/${id}`, updatedUsuario);
  }
}
