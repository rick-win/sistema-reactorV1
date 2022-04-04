import { Component, OnInit } from '@angular/core';
import { AuthFireService } from '../../services/auth-fire.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {

  constructor(
    private authFireService: AuthFireService,
    public authServices: AuthFireService,
    private toast: ToastrService,
    public router: Router

  ) { }

  ngOnInit(): void {
  }

  LogOut(){
    this.authServices.LogOut().then( () => {
        this.router.navigate(['login']);
 });

  }

}
