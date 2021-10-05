import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GestionarUsuarioComponent } from './pages/gestionar-usuario/gestionar-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { GenerarReportesComponent } from './pages/generar-reportes/generar-reportes.component';
import { MonitoreoComponent } from './pages/monitoreo/monitoreo.component';
import { TemperaturasComponent } from './pages/parametro_temperatura/temperaturas.component';
import { PresionComponent } from './pages/presion/presion.component';
import { EncenderEquiposComponent } from './pages/encender-equipos/encender-equipos.component';
import { AccesoFuncionalTecnicoComponent } from './pages/acceso-funcional-tecnico/acceso-funcional-tecnico.component';
import {AccesoFuncionalDirectivoComponent} from './pages/acceso-funcional-directivo/acceso-funcional-directivo.component';
import { AccesoFuncionalOperarioComponent } from './pages/acceso-funcional-operario/acceso-funcional-operario.component';
import { DatatablesComponent } from './pages/datatables/datatables.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

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
    component: RegistroComponent
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
    component: GestionarUsuarioComponent
  },
{
  path: 'generarReporte',
  component: GenerarReportesComponent
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
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
