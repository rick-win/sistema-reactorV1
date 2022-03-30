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
import { ReporteProduccionOperarioComponent } from './pages/reporte-produccion-operario/reporte-produccion-operario.component';
import { ReporteProcesoOperarioComponent } from './pages/reporte-proceso-operario/reporte-proceso-operario.component';
import { ReporteBitacoraEventosOperarioComponent } from './pages/reporte-bitacora-eventos-operario/reporte-bitacora-eventos-operario.component';
import { EstadisticasProcesoDirectivoComponent } from './pages/estadisticas-proceso-directivo/estadisticas-proceso-directivo.component';
import { EstadisticasProduccionDirectivoComponent } from './pages/estadisticas-produccion-directivo/estadisticas-produccion-directivo.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { SobreElProyectoComponent } from './pages/sobre-el-proyecto/sobre-el-proyecto.component';
import { InstitucionesComponent } from './pages/instituciones/instituciones.component';
import { AgradecimientosComponent } from './pages/agradecimientos/agradecimientos.component';
import { CdmComponent } from './pages/cdm/cdm.component';
import { UniautonomaComponent } from './pages/uniautonoma/uniautonoma.component';
import { DesarrolloComponent } from './pages/desarrollo/desarrollo.component';
import { ReporteParcialMantenimientoComponent } from './pages/reporte-parcial-mantenimiento/reporte-parcial-mantenimiento.component';
import { GestionarAlarmasComponent } from './pages/gestionar-alarmas/gestionar-alarmas.component';
import { GestionarReglasAlarmaComponent } from './pages/gestionar-reglas-alarma/gestionar-reglas-alarma.component';
import { CargueMaterialComponent } from './pages/cargue-material/cargue-material.component';
import { FomularioIncidenciasComponent } from './pages/fomulario-incidencias/fomulario-incidencias.component';
import { ParametrosTornilloComponent } from './pages/parametros-tornillo/parametros-tornillo.component';


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



// Apunta a tecnico o mantenimiento

{
  path: 'accesofuncional-mantenimiento',
  component: AccesoFuncionalTecnicoComponent,
},
{
  path: 'gestionar-alarmas',
  component: AccesoFuncionalTecnicoComponent,
},

{
  path: 'reglas-eventos',
  component: AccesoFuncionalTecnicoComponent,
},
{
  path: 'reporte-parcial-mantenimiento',
  component: AccesoFuncionalTecnicoComponent,
},

{
  path: 'sobre-el-proyecto-mantenimiento',
  component: AccesoFuncionalTecnicoComponent
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
  path: 'administrador',
  component: AdministradorComponent
},  

// Apunta a dashboard
{
  path: 'sobre-el-proyecto',
  component: DashboardComponent
},
{
  path: 'instituciones',
  component: DashboardComponent
},
{
  path: 'agradecimientos',
  component: DashboardComponent
},
{
  path: 'astin',
  component: DashboardComponent
},
{
  path: 'cdm',
  component: DashboardComponent
}
,
{
  path: 'uniautonoma-cauca',
  component: DashboardComponent
}
,
{
  path: 'desarrollo',
  component: DashboardComponent
},
{
  path: 'registro',
  component: DashboardComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
},


// Apunta A Directivo
{
  path: 'accesofuncional-directivo',
  component: AccesoFuncionalDirectivoComponent,
},

{
  path: 'sobre-el-proyecto-directivo',
  component:  AccesoFuncionalDirectivoComponent
},

{
  path: 'instituciones-directivo',
  component:  AccesoFuncionalDirectivoComponent
},

{
  path: 'agradecimientos-directivo',
  component:  AccesoFuncionalDirectivoComponent
},

{
  path: 'astin-directivo',
  component:  AccesoFuncionalDirectivoComponent
},
{
  path: 'cdm-directivo',
  component:  AccesoFuncionalDirectivoComponent
},
{
  path: 'uniautonoma-cauca-directivo',
  component:  AccesoFuncionalDirectivoComponent
},

{
  path: 'estadisticasProduccionDirectivo',
  component: AccesoFuncionalDirectivoComponent,
},

{
  path: 'estadisticasProcesoDirectivo',
  component: AccesoFuncionalDirectivoComponent,
},

{
  path: 'simulacion',
  component: AccesoFuncionalDirectivoComponent,
},
{
  path: 'registro-directivo',
  component: AccesoFuncionalDirectivoComponent
},


// Apunta A Operario

{
  path: 'accesofuncional-operario',
  component: AccesoFuncionalOperarioComponent,
},
{
  path: 'registroProducto',
  component: AccesoFuncionalOperarioComponent,
},

{
  path: 'sobre-el-proyecto-operario',
  component:  AccesoFuncionalOperarioComponent
},

{
  path: 'desarrollo-operario',
  component: AccesoFuncionalOperarioComponent
},

{
  path: 'instituciones-operario',
  component: AccesoFuncionalOperarioComponent
},
{
  path: 'agradecimientos-operario',
  component: AccesoFuncionalOperarioComponent
},
{
  path: 'astin-operario',
  component: AccesoFuncionalOperarioComponent
},
{
  path: 'cdm-operario',
  component: AccesoFuncionalOperarioComponent
},
{
  path: 'uniautonoma-cauca-operario',
  component: AccesoFuncionalOperarioComponent
},
{
  path: 'reporteBitacoraIncidencias',
  component: AccesoFuncionalOperarioComponent,
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
  path: 'encender-equipos',
  component: AccesoFuncionalOperarioComponent,
},
{
path: 'cargueMaterial-tolva',
component: AccesoFuncionalOperarioComponent
},
{
path: 'formnularioIncidencias',
component: AccesoFuncionalOperarioComponent
},

{
  path: 'parametrosTornillo',
  component: AccesoFuncionalOperarioComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
