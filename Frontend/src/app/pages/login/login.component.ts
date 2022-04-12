import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder} from "@angular/forms";

import { BaseFormUser } from '../../shared/base-form-user';
import { AuthApiService } from '../../services/auth-api.service';
import { Subscription } from 'rxjs';
import {UserResponse} from "../../models/Usuario";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {


  logInForm = this.fB.group({
    email:[''],
    password:['']
  })
  constructor(private authSrvc: AuthApiService, private fB: FormBuilder, private router: Router) {}

  ngOnInit(): void {
  }

  onLogin(): void{
    const formValue = this.logInForm.value;
    this.authSrvc.login(formValue).subscribe((res => {
      console.log(res)
      if (res){
        switch (res.role) {
          case 'operario' :{
            this.router.navigate(['/accesofuncional-operario'])
            break;
          }
          case 'admin' :{
            this.router.navigate(['/accesofuncional-directivo'])
            break;
          }
          case 'mantenimiento' :{
            this.router.navigate(['/accesofuncional-mantenimiento'])
            break;
          }
        }
      }
    }));
  }

  logOut():void{
    localStorage.removeItem('Token');
    //Set isLogged as false
  }

  ngOnDestroy(): void {
  }
}
