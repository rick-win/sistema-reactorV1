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
import { AngularFireAuthModule} from '@angular/fire/auth';

//toast
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { GestionarUsuarioComponent } from './pages/gestionar-usuario/gestionar-usuario.component';
import { CargueMaterialComponent } from './pages/cargue-material/cargue-material.component';
import { TemperaturasComponent } from './pages/parametro_temperatura/temperaturas.component';
import { PresionComponent } from './pages/presion/presion.component';
import { FlujoComponent } from './pages/flujo/flujo.component';
import { MonitoreoComponent } from './pages/monitoreo/monitoreo.component';

import { GestionarUsuarioService } from './services/gestionar-usuario.service';
import { EncenderEquiposComponent } from './pages/encender-equipos/encender-equipos.component';
import { AccesoFuncionalTecnicoComponent } from './pages/acceso-funcional-tecnico/acceso-funcional-tecnico.component';
import { ReportsManagerService } from './services/reports-manager.service'

import { DataTablesModule } from "angular-datatables";
import { DatatablesComponent } from './pages/datatables/datatables.component';
import { AccesoFuncionalDirectivoComponent } from './pages/acceso-funcional-directivo/acceso-funcional-directivo.component';
import { AccesoFuncionalOperarioComponent } from './pages/acceso-funcional-operario/acceso-funcional-operario.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RegistroProductoComponent } from './pages/registro-producto/registro-producto.component';
import { ReporteProduccionOperarioComponent } from './pages/reporte-produccion-operario/reporte-produccion-operario.component';
import { ReporteProcesoOperarioComponent } from './pages/reporte-proceso-operario/reporte-proceso-operario.component';
import { ReporteBitacoraEventosOperarioComponent } from './pages/reporte-bitacora-eventos-operario/reporte-bitacora-eventos-operario.component';
import { SimulacionComponent } from './pages/simulacion/simulacion.component';
import { ReadProductionReportComponent } from './pages/read-production-report/read-production-report.component';
import { ReadProcessReportComponent } from './pages/read-process-report/read-process-report.component';
import { ReadProductRegistryComponent } from './pages/read-product-registry/read-product-registry.component';
import { ReadFailureReportComponent } from './pages/read-failure-report/read-failure-report.component';
import { DirectiveResumeComponent } from './pages/directive-resume/directive-resume.component';
import { DirectiveReportComponent } from './pages/directive-report/directive-report.component';
import { EstadisticasProcesoDirectivoComponent } from './pages/estadisticas-proceso-directivo/estadisticas-proceso-directivo.component';
import { EstadisticasProduccionDirectivoComponent } from './pages/estadisticas-produccion-directivo/estadisticas-produccion-directivo.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { ListarUsuarioComponent } from './pages/listar-usuario/listar-usuario.component';




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
    EncenderEquiposComponent,
    AccesoFuncionalTecnicoComponent,
    DatatablesComponent,
    AccesoFuncionalDirectivoComponent,
    AccesoFuncionalOperarioComponent,
    NavbarComponent,
    RegistroProductoComponent,
    ReporteProduccionOperarioComponent,
    ReporteProcesoOperarioComponent,
    ReporteBitacoraEventosOperarioComponent,
    SimulacionComponent,
    ReadProductionReportComponent,
    ReadProcessReportComponent,
    ReadProductRegistryComponent,
    ReadFailureReportComponent,
    DirectiveResumeComponent,
    DirectiveReportComponent,



    EstadisticasProcesoDirectivoComponent,
    EstadisticasProduccionDirectivoComponent,
    AdministradorComponent,
    ListarUsuarioComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    DataTablesModule,
    
  ],
  providers: [GestionarUsuarioService, ReportsManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
