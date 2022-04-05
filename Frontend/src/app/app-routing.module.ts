import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GestionarUsuarioComponent } from './pages/gestionar-usuario/gestionar-usuario.component';
import { LoginComponent } from './pages/login/login.component';
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
import { ReporteProduccionOperarioComponent } from './pages/reporte-produccion-operario/reporte-produccion-operario.component';
import { ReporteProcesoOperarioComponent } from './pages/reporte-proceso-operario/reporte-proceso-operario.component';
import { ReporteBitacoraEventosOperarioComponent } from './pages/reporte-bitacora-eventos-operario/reporte-bitacora-eventos-operario.component';
import { EstadisticasProcesoDirectivoComponent } from './pages/estadisticas-proceso-directivo/estadisticas-proceso-directivo.component';
import { EstadisticasProduccionDirectivoComponent } from './pages/estadisticas-produccion-directivo/estadisticas-produccion-directivo.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { SobreElProyectoComponent } from './pages/sobre-el-proyecto/sobre-el-proyecto.component';
import { SobreProyectoDirectivoComponent} from './pages/sobre-proyecto-directivo/sobre-proyecto-directivo.component';
import { SobreProyectoMantenimientoComponent } from './pages/sobre-proyecto-mantenimiento/sobre-proyecto-mantenimiento.component';
import { InstitucionesComponent } from './pages/instituciones/instituciones.component';
import { AgradecimientosComponent } from './pages/agradecimientos/agradecimientos.component';
import { AgradecimientosDirectivoComponent } from './pages/agradecimientos-directivo/agradecimientos-directivo.component';
import { AgradecimientosMantenimientoComponent } from './pages/agradecimientos-mantenimiento/agradecimientos-mantenimiento.component';
import { CdmComponent } from './pages/cdm/cdm.component';
import { CmdDirectivoComponent} from './pages/cmd-directivo/cmd-directivo.component';
import { CmdMantenimientoComponent} from './pages/cmd-mantenimiento/cmd-mantenimiento.component';
import { UniautonomaComponent } from './pages/uniautonoma/uniautonoma.component';
import { UniautonomaDirectivoComponent} from './pages/uniautonoma-directivo/uniautonoma-directivo.component';
import { UniautonomaMantenimientoComponent } from './pages/uniautonoma-mantenimiento/uniautonoma-mantenimiento.component';
import { DesarrolloComponent } from './pages/desarrollo/desarrollo.component';
import { DesarrolloDirectivoComponent} from './pages/desarrollo-directivo/desarrollo-directivo.component';
import { DesarrolloMantenimientoComponent } from './pages/desarrollo-mantenimiento/desarrollo-mantenimiento.component';
import { ReporteParcialMantenimientoComponent } from './pages/reporte-parcial-mantenimiento/reporte-parcial-mantenimiento.component';
import { GestionarAlarmasComponent } from './pages/gestionar-alarmas/gestionar-alarmas.component';
import { GestionarReglasAlarmaComponent } from './pages/gestionar-reglas-alarma/gestionar-reglas-alarma.component';
import { CargueMaterialComponent } from './pages/cargue-material/cargue-material.component';
import { FomularioIncidenciasComponent } from './pages/fomulario-incidencias/fomulario-incidencias.component';
import { ParametrosTornilloComponent } from './pages/parametros-tornillo/parametros-tornillo.component';
import {CheckLogInGuard} from "./shared/guards/check-log-in.guard";
import {CheckLogOutGuard} from "./shared/guards/check-log-out.guard";



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [CheckLogInGuard]
  },

  {
    path: 'gestionarUsuario',
    component: AdministradorComponent,
    canActivate: [CheckLogOutGuard]
  },


{
  path: 'monitoreo',
  component: MonitoreoComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'perfilTemperatura',
  component: TemperaturasComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'presion',
  component: PresionComponent,
  canActivate: [CheckLogOutGuard]
},



// Apunta a tecnico o mantenimiento

{
  path: 'accesofuncional-mantenimiento',
  component: AccesoFuncionalTecnicoComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'gestionar-alarmas',
  component: AccesoFuncionalTecnicoComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'reglas-eventos',
  component: AccesoFuncionalTecnicoComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'reporte-parcial-mantenimiento',
  component: AccesoFuncionalTecnicoComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'sobre-proyecto-mantenimiento',
  component: AccesoFuncionalTecnicoComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'astin-mantenimiento',
  component: AccesoFuncionalTecnicoComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'cdm-mantenimiento',
  component: AccesoFuncionalTecnicoComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'agradecimientos-mantenimiento',
  component: AccesoFuncionalTecnicoComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'equipo-desarrollo-mantenimiento',
  component: AccesoFuncionalTecnicoComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'uniautonoma-mantenimiento',
  component: AccesoFuncionalTecnicoComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'dataTable',
  component: DatatablesComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'Navbar',
  component: NavbarComponent,
  canActivate: [CheckLogOutGuard]
},



{
  path: 'administrador',
  component: AdministradorComponent,
  canActivate: [CheckLogOutGuard]
},

// Apunta a dashboard

{
  path: 'instituciones',
  component: DashboardComponent,
  canActivate: [CheckLogOutGuard]
},
// {
//   path: 'agradecimientos',
//   component: DashboardComponent
// },
{
  path: 'astin',
  component: DashboardComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'cdm',
  component: DashboardComponent,
  canActivate: [CheckLogOutGuard]
}
,
{
  path: 'uniautonoma-cauca',
  component: DashboardComponent,
  canActivate: [CheckLogOutGuard]
}
,
// {
//   path: 'desarrollo',
//   component: DashboardComponent
// },
{
  path: 'registro',
  component: DashboardComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [CheckLogOutGuard]
},


// Apunta A Directivo
{
  path: 'accesofuncional-directivo',
  component: AccesoFuncionalDirectivoComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'sobre-proyecto-directivo',
  component:  AccesoFuncionalDirectivoComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'instituciones-directivo',
  component:  AccesoFuncionalDirectivoComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'agradecimientos-directivo',
  component:  AccesoFuncionalDirectivoComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'astin-directivo',
  component:  AccesoFuncionalDirectivoComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'cdm-directivo',
  component:  AccesoFuncionalDirectivoComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'uniautonoma-directivo',
  component:  AccesoFuncionalDirectivoComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'equipo-desarrollo-directivo',
  component:  AccesoFuncionalDirectivoComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'estadisticasProduccionDirectivo',
  component: AccesoFuncionalDirectivoComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'estadisticasProcesoDirectivo',
  component: AccesoFuncionalDirectivoComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'simulacion',
  component: AccesoFuncionalDirectivoComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'registro-directivo',
  component: AccesoFuncionalDirectivoComponent,
  canActivate: [CheckLogOutGuard]
},


// Apunta A Operario

{
  path: 'accesofuncional-operario',
  component: AccesoFuncionalOperarioComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'registroProducto',
  component: AccesoFuncionalOperarioComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'sobre-el-proyecto',
  component: AccesoFuncionalOperarioComponent,
  canActivate: [CheckLogOutGuard]
},

// {
//   path: 'sobre-el-proyecto-operario',
//   component:  AccesoFuncionalOperarioComponent
// },

{
  path: 'desarrollo-O',
  component: AccesoFuncionalOperarioComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'instituciones-operario',
  component: AccesoFuncionalOperarioComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'agradecimientos-O',
  component: AccesoFuncionalOperarioComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'astin-O',
  component: AccesoFuncionalOperarioComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'cdm-O',
  component: AccesoFuncionalOperarioComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'uniautonoma-cauca-O',
  component: AccesoFuncionalOperarioComponent,
  canActivate: [CheckLogOutGuard]
},
{
  path: 'reporteBitacoraIncidencias',
  component: AccesoFuncionalOperarioComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'reporteProduccionOperario',
  component: AccesoFuncionalOperarioComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'reporteProcesoOperario',
  component: AccesoFuncionalOperarioComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'encender-equipos',
  component: AccesoFuncionalOperarioComponent,
  canActivate: [CheckLogOutGuard]
},
{
path: 'cargueMaterial-tolva',
component: AccesoFuncionalOperarioComponent,
  canActivate: [CheckLogOutGuard]
},
{
path: 'formnularioIncidencias',
component: AccesoFuncionalOperarioComponent,
  canActivate: [CheckLogOutGuard]
},

{
  path: 'parametrosTornillo',
  component: AccesoFuncionalOperarioComponent,
  canActivate: [CheckLogOutGuard]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
