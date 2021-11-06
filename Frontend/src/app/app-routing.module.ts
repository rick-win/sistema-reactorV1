import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GestionarUsuarioComponent } from './pages/gestionar-usuario/gestionar-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MonitoreoComponent } from './pages/monitoreo/monitoreo.component';
import { TemperaturasComponent } from './pages/parametro_temperatura/temperaturas.component';
import { PresionComponent } from './pages/presion/presion.component';
import { EncenderEquiposComponent } from './pages/encender-equipos/encender-equipos.component';
import { AccesoFuncionalTecnicoComponent } from './pages/acceso-funcional-tecnico/acceso-funcional-tecnico.component';
import {AccesoFuncionalDirectivoComponent} from './pages/acceso-funcional-directivo/acceso-funcional-directivo.component';
import { AccesoFuncionalOperarioComponent } from './pages/acceso-funcional-operario/acceso-funcional-operario.component';
import { DatatablesComponent } from './pages/datatables/datatables.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RegistroProductoComponent } from './pages/registro-producto/registro-producto.component';
import { SimulacionComponent} from './pages/simulacion/simulacion.component';
import { SaludoBienbenidaComponent } from './pages/saludo-bienbenida/saludo-bienbenida.component';
import {ReporteBitacoraEventosOperarioComponent} from "./pages/reporte-bitacora-eventos-operario/reporte-bitacora-eventos-operario.component";
import {ReadProductionReportComponent} from "./pages/read-production-report/read-production-report.component";
import {ReadProcessReportComponent} from "./pages/read-process-report/read-process-report.component";
import {ReadProductRegistryComponent} from "./pages/read-product-registry/read-product-registry.component";
import {ReporteProduccionOperarioComponent} from "./pages/reporte-produccion-operario/reporte-produccion-operario.component";
import {ReporteProcesoOperarioComponent} from "./pages/reporte-proceso-operario/reporte-proceso-operario.component";
import {ReadFailureReportComponent} from "./pages/read-failure-report/read-failure-report.component";
import {DirectiveReportComponent} from "./pages/directive-report/directive-report.component";
import { ReporteProduccionOperarioComponent } from './pages/reporte-produccion-operario/reporte-produccion-operario.component';
import { ReporteProcesoOperarioComponent } from './pages/reporte-proceso-operario/reporte-proceso-operario.component';
import { ReporteBitacoraEventosOperarioComponent } from './pages/reporte-bitacora-eventos-operario/reporte-bitacora-eventos-operario.component';
import { EstadisticasProcesoDirectivoComponent } from './pages/estadisticas-proceso-directivo/estadisticas-proceso-directivo.component';
import { EstadisticasProduccionDirectivoComponent } from './pages/estadisticas-produccion-directivo/estadisticas-produccion-directivo.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { ListarUsuarioComponent } from './pages/listar-usuario/listar-usuario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'recuperarPassword',
    component: RecuperarPasswordComponent
  },

  {
    path: 'gestionarUsuario',
    component: AdministradorComponent,
  },

  {
    path: 'monitoreo',
    component: MonitoreoComponent
  },

  {
    path: 'perfilTemperatura',
    component: TemperaturasComponent
  },

  {
    path: 'presion',
    component: PresionComponent
  },

  {
    path: 'encender-equipos',
    component: EncenderEquiposComponent,
  },

  {
    path: 'accesofuncional-tecnico',
    component: AccesoFuncionalTecnicoComponent,
  },


  {
    path: 'accesofuncional-directivo',
    component: AccesoFuncionalDirectivoComponent,
  },

  {
    path: 'accesofuncional-operario',
    component: AccesoFuncionalOperarioComponent,
  },

  {
    path: 'dataTable',
    component: DatatablesComponent,
  },

  {
    path: 'Navbar',
    component: NavbarComponent,
  },

  {
    path: 'readFailure',
    component: ReadFailureReportComponent
  },

  {
    path: 'readFailureShow',
    component: AccesoFuncionalOperarioComponent
  },

  {
    path: 'readProduction',
    component: ReadProductionReportComponent
  },

  {
    path: 'readProductionShow',
    component: AccesoFuncionalOperarioComponent
  },
{
  path: 'perfilTemperatura',
  component: AccesoFuncionalOperarioComponent
},

  {
    path: 'reportResumeShow',
    component: AccesoFuncionalDirectivoComponent
  },

  {
    path: 'readProcess',
    component: ReadProcessReportComponent
  },
{
  path: 'encender-equipos',
  component: AccesoFuncionalOperarioComponent,
},

  {
    path: 'readProcessShow',
    component: AccesoFuncionalOperarioComponent
  },

  {
    path: 'readProduct',
    component: ReadProductRegistryComponent
  },

  {
    path: 'readProductShow',
    component: AccesoFuncionalOperarioComponent
  },

  {
    path: 'singleReport',
    component: DirectiveReportComponent
  },

  {
    path: 'registroProducto',
    component: RegistroProductoComponent
  },

  {
    path: 'productionRegister',
    component: ReporteProduccionOperarioComponent
  },

  {
    path: 'processRegister',
    component: ReporteProcesoOperarioComponent
  },

  {
    path: 'failureRegister',
    component: ReporteBitacoraEventosOperarioComponent
  },

  {
    path: 'simulacion',
    component: SimulacionComponent,
  },

  {
    path: 'saludoEntrada',
    component: SaludoBienbenidaComponent,
  }

  ];
{
  path: 'registroProducto',
  component: AccesoFuncionalOperarioComponent,
},

{
  path: 'simulacion',
  component: AccesoFuncionalDirectivoComponent,
},

{
  path: 'reporteProduccionOperario',
  component: AccesoFuncionalOperarioComponent,
},

{
  path: 'reporteProcesoOperario',
  component: AccesoFuncionalOperarioComponent,
},

{
  path: 'reporteBitacoraIncidencias',
  component: AccesoFuncionalOperarioComponent,
},

{
  path: 'estadisticasProcesoDirectivo',
  component: AccesoFuncionalDirectivoComponent,
},

{
  path: 'estadisticasProduccionDirectivo',
  component: AccesoFuncionalDirectivoComponent,
},

{
  path: 'administrador',
  component: AdministradorComponent
},

{
  path: 'lista-usuarios',
  component: ListarUsuarioComponent
}




];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
