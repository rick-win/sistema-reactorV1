import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

//toast
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { GestionarUsuarioComponent } from './pages/gestionar-usuario/gestionar-usuario.component';
import { CargueMaterialComponent } from './pages/cargue-material/cargue-material.component';
import { TemperaturasComponent } from './pages/temperaturas/temperaturas.component';
import { PresionComponent } from './pages/presion/presion.component';
import { FlujoComponent } from './pages/flujo/flujo.component';
import { MonitoreoComponent } from './pages/monitoreo/monitoreo.component';
import { GenerarReportesComponent } from './pages/generar-reportes/generar-reportes.component';

import { GestionarUsuarioService } from './services/gestionar-usuario.service';
import { EncenderEquiposComponent } from './pages/encender-equipos/encender-equipos.component';
import { AccesoFuncionalTecnicoComponent } from './pages/acceso-funcional-tecnico/acceso-funcional-tecnico.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent,
    RecuperarPasswordComponent,
    GestionarUsuarioComponent,
    CargueMaterialComponent,
    TemperaturasComponent,
    PresionComponent,
    FlujoComponent,
    MonitoreoComponent,
    GenerarReportesComponent,
    EncenderEquiposComponent,
    AccesoFuncionalTecnicoComponent,
   
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [GestionarUsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
