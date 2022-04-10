import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthApiService} from "../../services/auth-api.service";
import {map, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CheckLogOutGuard implements CanActivate {
  constructor(private authSvc: AuthApiService, private router: Router) {
  }
  canActivate():
    Observable<boolean | UrlTree>{
      return this.authSvc.isLogged.pipe(
      take(1),
      map((isLogged) => isLogged)
    )
  }
}
