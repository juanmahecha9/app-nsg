import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

/* componente inicial */
import { AnimacionInicioComponent } from './componentes/animacion-inicio/animacion-inicio.component';
/* componentes de registro e inicio de secion */
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
/* Componentes del mapa del juego */
import { MapaComponent } from './componentes/mapa/mapa.component';
import { AfricaComponent } from './componentes/africa/africa.component'
import { AsiaComponent } from './componentes/asia/asia.component';
import { EuropaComponent } from './componentes/europa/europa.component';
import { OceaniaComponent } from './componentes/oceania/oceania.component';
import { NorteAmericaComponent } from './componentes/norte-america/norte-america.component';
import { CentroAmericaComponent } from './componentes/centro-america/centro-america.component';
import { SurAmericaComponent } from './componentes/sur-america/sur-america.component';
import { AuthService } from './services/auth.service';
import { ListaDatosCovidComponent } from './componentes/lista-datos-covid/lista-datos-covid.component';

import { Tablero1Component }  from './componentes/tablero1/tablero1.component'
import { Tablero2Component } from './componentes/tablero2/tablero2.component'
import { Tablero3Component } from './componentes/tablero3/tablero3.component'
import { Tablero4Component } from './componentes/tablero4/tablero4.component'
import { Tablero5Component } from './componentes/tablero5/tablero5.component'
import { Tablero6Component } from './componentes/tablero6/tablero6.component'
import { Tablero7Component } from './componentes/tablero7/tablero7.component'
import { InstruccionesComponent } from './componentes/instrucciones/instrucciones.component'


/* prueba */
import { UserLoginComponent } from './compentes/user-login/user-login.component'
import { BatallaComponent } from './componentes/batalla/batalla.component'

  import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: AnimacionInicioComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'inicio-sesion',
    component: InicioSesionComponent,
  },
  {
    path: 'world-map',
    component: MapaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'africa',
    component: AfricaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'asia',
    component: AsiaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'europa',
    component: EuropaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'oceania',
    component: OceaniaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'norte-america',
    component: NorteAmericaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'centro-america',
    component: CentroAmericaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sur-america',
    component: SurAmericaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'datos/covid',
    component: ListaDatosCovidComponent,
  },
  {
    path: 'tablero-belice',
    component: Tablero1Component,
    canActivate: [AuthGuard],

  },
  {
    path: 'tablero-usa',
    component: Tablero2Component,
    canActivate: [AuthGuard],

  },
  {
    path: 'tablero-colombia',
    component: Tablero3Component,
    canActivate: [AuthGuard],

  },
  {
    path: 'tablero-alemania',
    component: Tablero4Component,
    canActivate: [AuthGuard],

  },
  {
    path: 'tablero-egipto',
    component: Tablero5Component,
    canActivate: [AuthGuard],

  },
  {
    path: 'tablero-china',
    component: Tablero6Component,
    canActivate: [AuthGuard],

  },
  {
    path: 'tablero-australia',
    component: Tablero7Component,
    canActivate: [AuthGuard],

  },
  {
    path: 'instrucciones',
    component: InstruccionesComponent
  },
  {
    path: 'USER',
    component: UserLoginComponent,
    canActivate: [AuthGuard],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
