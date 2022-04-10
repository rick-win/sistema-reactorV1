import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('Token'); // you probably want to store it in localStorage or something

    if (!token) {
      return next.handle(req);
    }

    // Clone the request and set the new header in one step.
    const req1 = req.clone({
      headers: req.headers.set('auth', `${token}`)
    });

    return next.handle(req1);
  }

}
