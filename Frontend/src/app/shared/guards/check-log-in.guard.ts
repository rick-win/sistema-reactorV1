import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthApiService} from "../../services/auth-api.service";
import {map, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CheckLogInGuard implements CanActivate {
  constructor(private authSvc: AuthApiService, private router: Router) {
  }
  canActivate():
    Observable<boolean>{
    return this.authSvc.isLogged.pipe(
      take(1),
      map((isLogged) => !isLogged)
    )
  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): true|UrlTree {
  //   const url: string = state.url;
  //
  //   return this.checkLogin(url);
  // }
  //
  // checkLogin(url: string): true|UrlTree {
  //   if (this.authSvc.isLogged) { return true; }
  //
  //   // Store the attempted URL for redirecting
  //   this.authSvc.redirectUrl = url;
  //
  //   // Redirect to the login page
  //   return this.router.parseUrl('/login');
  // }

}
