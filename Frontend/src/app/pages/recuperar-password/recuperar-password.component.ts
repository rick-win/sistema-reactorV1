import { Component, OnInit } from '@angular/core';
import { AuthFireService } from '../../services/auth-fire.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.scss']
})
export class RecuperarPasswordComponent implements OnInit {
  public correoRecuperar = '';
  constructor(
    private authServices: AuthFireService
  ) { 
  }

  ngOnInit(): void {
  }
  public recibirCorreo() {
    console.log(this.correoRecuperar);
    
    if (this.correoRecuperar) {
      this.authServices.ForgotPassword(this.correoRecuperar);
    }
  }

}
