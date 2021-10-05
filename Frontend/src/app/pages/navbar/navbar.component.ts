import { Component, OnInit } from '@angular/core';
import { AuthFireService } from '../../services/auth-fire.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authServices: AuthFireService,) { }

  ngOnInit(): void {
  }

}
