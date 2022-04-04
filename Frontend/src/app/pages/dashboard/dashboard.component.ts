import { Component, OnInit } from '@angular/core';
import { AuthFireService } from '../../services/auth-fire.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private authFireService: AuthFireService,
    public authServices: AuthFireService,
    private toast: ToastrService,
    public router: Router) { }

  ngOnInit(): void {
  }

  LogOut(){
    this.authServices.LogOut().then( () => {
        this.router.navigate(['login']);
 });

  }

}
