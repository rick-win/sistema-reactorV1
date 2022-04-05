import { Component } from '@angular/core';
import { AuthApiService } from "./services/auth-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public authSrvc: AuthApiService) {
  }

  title = 'Frontend';
}
