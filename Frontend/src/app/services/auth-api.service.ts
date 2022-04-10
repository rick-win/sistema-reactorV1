import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

import { UserResponse, User } from '../models/Usuario';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import {error} from "jquery";
import {loggedIn} from "@angular/fire/auth-guard";
import {UserFull} from "../models/usuario.model";

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {

  private userInfo: UserFull;

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.checkToken();
  }

  redirectUrl: string | null = null;

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  giveLoggedUser(): UserFull{
    return this.userInfo;
  }

  login(authCred: User): Observable<UserResponse | void> {
    return this.http.post<UserResponse>(`${environment.API_URL}/auth/login`, authCred)
      .pipe(
        map((res) => {
          console.log(res)
          this.userInfo = {
            id_Usuario: res.userID,
            rol_Usuario: res.role,
            email_Usuario: res.username,
            nom_Usuario: res.name,
            ape_Usuario: res.last,
            tel_Usuario: res.phone
          }
          //saveToken
          this.saveToken(res.token);
          this.loggedIn.next(true);
          return res;
      }),
        catchError((err) => this.errorHandler(err))
      )
  }

  logout(): void {
    localStorage.removeItem('Token')
    this.loggedIn.next(false)
  }

  private checkToken(): void{
    const userToken = localStorage.getItem('Token');
    const isExpired = helper.isTokenExpired(userToken);

    isExpired ? this.logout() : this.loggedIn.next(true);

    console.log('Is Expired = ', isExpired )
  }

  private saveToken(token: string): void{
    localStorage.setItem('Token', token);
  }

  private errorHandler(err): Observable<never>{
    let errorMessage = 'error data';
    if (err){
      errorMessage = `Error: Code ${err.message}`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
