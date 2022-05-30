import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//toast
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { GestionarUsuarioComponent } from './pages/gestionar-usuario/gestionar-usuario.component';
import { CargueMaterialComponent } from './pages/cargue-material/cargue-material.component';
import { TemperaturasComponent } from './pages/parametro_temperatura/temperaturas.component';
import { PresionComponent } from './pages/presion/presion.component';
import { FlujoComponent } from './pages/flujo/flujo.component';
import { MonitoreoComponent } from './pages/monitoreo/monitoreo.component';

import { GestionarUsuarioService } from './services/gestionar-usuario.service';
import { EncenderEquiposComponent } from './pages/encender-equipos/encender-equipos.component';
import { AccesoFuncionalTecnicoComponent } from './pages/acceso-funcional-tecnico/acceso-funcional-tecnico.component';

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
import { EstadisticasProcesoDirectivoComponent } from './pages/estadisticas-proceso-directivo/estadisticas-proceso-directivo.component';
import { EstadisticasProduccionDirectivoComponent } from './pages/estadisticas-produccion-directivo/estadisticas-produccion-directivo.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { SobreElProyectoComponent } from './pages/sobre-el-proyecto/sobre-el-proyecto.component';
import { InstitucionesComponent } from './pages/instituciones/instituciones.component';
import { AgradecimientosComponent } from './pages/agradecimientos/agradecimientos.component';
import { DesarrolloComponent } from './pages/desarrollo/desarrollo.component';

import { AstinComponent } from './pages/astin/astin.component';
import { CdmComponent } from './pages/cdm/cdm.component';
import { UniautonomaComponent } from './pages/uniautonoma/uniautonoma.component';
import { GestionarAlarmasComponent } from './pages/gestionar-alarmas/gestionar-alarmas.component';
import { GestionarReglasAlarmaComponent } from './pages/gestionar-reglas-alarma/gestionar-reglas-alarma.component';
import { ReporteParcialMantenimientoComponent } from './pages/reporte-parcial-mantenimiento/reporte-parcial-mantenimiento.component';
import { RecordReporteMantenimientoComponent } from './pages/record-reporte-mantenimiento/record-reporte-mantenimiento.component';
import { FomularioIncidenciasComponent } from './pages/fomulario-incidencias/fomulario-incidencias.component';
import { ParametrosTornilloComponent } from './pages/parametros-tornillo/parametros-tornillo.component';
import { SobreProyectoDirectivoComponent } from './pages/sobre-proyecto-directivo/sobre-proyecto-directivo.component';
import { UniautonomaDirectivoComponent } from './pages/uniautonoma-directivo/uniautonoma-directivo.component';
import { AstinDirectivoComponent } from './pages/astin-directivo/astin-directivo.component';
import { CmdDirectivoComponent } from './pages/cmd-directivo/cmd-directivo.component';
import { AgradecimientosDirectivoComponent } from './pages/agradecimientos-directivo/agradecimientos-directivo.component';
import { DesarrolloDirectivoComponent } from './pages/desarrollo-directivo/desarrollo-directivo.component';
import { SobreProyectoMantenimientoComponent } from './pages/sobre-proyecto-mantenimiento/sobre-proyecto-mantenimiento.component';
import { UniautonomaMantenimientoComponent } from './pages/uniautonoma-mantenimiento/uniautonoma-mantenimiento.component';
import { AstinMantenimientoComponent } from './pages/astin-mantenimiento/astin-mantenimiento.component';
import { CmdMantenimientoComponent } from './pages/cmd-mantenimiento/cmd-mantenimiento.component';
import { AgradecimientosMantenimientoComponent } from './pages/agradecimientos-mantenimiento/agradecimientos-mantenimiento.component';
import { DesarrolloMantenimientoComponent } from './pages/desarrollo-mantenimiento/desarrollo-mantenimiento.component';
import {AuthInterceptor} from "./shared/httpInterceptor";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {APP_BASE_HREF} from "@angular/common";
import { ReporteIngresoOperarioComponent } from './pages/reporte-ingreso-operario/reporte-ingreso-operario.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent,
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
    EstadisticasProcesoDirectivoComponent,
    EstadisticasProduccionDirectivoComponent,
    AdministradorComponent,
    SobreElProyectoComponent,
    InstitucionesComponent,
    AgradecimientosComponent,
    DesarrolloComponent,

    AstinComponent,
    CdmComponent,
    UniautonomaComponent,
    GestionarAlarmasComponent,
    GestionarReglasAlarmaComponent,
    ReporteParcialMantenimientoComponent,
    RecordReporteMantenimientoComponent,
    FomularioIncidenciasComponent,
    ParametrosTornilloComponent,
    SobreProyectoDirectivoComponent,
    UniautonomaDirectivoComponent,
    AstinDirectivoComponent,
    CmdDirectivoComponent,
    AgradecimientosDirectivoComponent,
    DesarrolloDirectivoComponent,
    SobreProyectoMantenimientoComponent,
    UniautonomaMantenimientoComponent,
    AstinMantenimientoComponent,
    CmdMantenimientoComponent,
    AgradecimientosMantenimientoComponent,
    DesarrolloMantenimientoComponent,
    ReporteIngresoOperarioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    DataTablesModule,
    NgbModule,

  ],
  providers: [GestionarUsuarioService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    { provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
