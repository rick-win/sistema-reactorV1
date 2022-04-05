import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthApiService} from "../../services/auth-api.service";


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {

  constructor(
    public router: Router,
    public authApi: AuthApiService
  ) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authApi.logout();
    this.router.navigate(['/login'])
 };

}
