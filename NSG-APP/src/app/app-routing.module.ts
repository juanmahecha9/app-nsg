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
import { AfricaComponent } from './componentes/africa/africa.component';
import { AsiaComponent } from './componentes/asia/asia.component';
import { EuropaComponent } from './componentes/europa/europa.component';
import { OceaniaComponent } from './componentes/oceania/oceania.component';
import { NorteAmericaComponent } from './componentes/norte-america/norte-america.component';
import { CentroAmericaComponent } from './componentes/centro-america/centro-america.component';
import { SurAmericaComponent } from './componentes/sur-america/sur-america.component';
import { AuthService } from './services/auth.service';
import { ListaDatosCovidComponent } from './componentes/lista-datos-covid/lista-datos-covid.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
