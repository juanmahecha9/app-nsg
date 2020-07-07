import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* COmponentes */
import { AnimacionInicioComponent } from './componentes/animacion-inicio/animacion-inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NorteAmericaComponent } from './componentes/norte-america/norte-america.component';
import { OceaniaComponent } from './componentes/oceania/oceania.component';

import { BotonesMapaComponent } from './componentes/botones-mapa/botones-mapa.component';
import { AsiaComponent } from './componentes/asia/asia.component';
import { EuropaComponent } from './componentes/europa/europa.component';
import { CentroAmericaComponent } from './componentes/centro-america/centro-america.component';
import { SurAmericaComponent } from './componentes/sur-america/sur-america.component';
import { ListaDatosCovidComponent } from './componentes/lista-datos-covid/lista-datos-covid.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { from } from 'rxjs';
/* importar servicos */
import { AuthGuard } from './auth.guard';
import { TokenService } from './services/token.service';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AudioMapaComponent } from './componentes/audio-mapa/audio-mapa.component';
import { AudioDatosCovidComponent } from './componentes/audio-datos-covid/audio-datos-covid.component';
import { AnimacionMComponent } from './componentes/animacion-m/animacion-m.component';
import { BatallaComponent } from './componentes/batalla/batalla.component';
import { AfricaComponent } from './componentes/africa/africa.component';
import { Tablero1Component } from './componentes/tablero1/tablero1.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimacionInicioComponent,
    RegistroComponent,
    InicioSesionComponent,
    MapaComponent,
    HeaderComponent,
    NorteAmericaComponent,
    OceaniaComponent,
    
    BotonesMapaComponent,
    AsiaComponent,
    EuropaComponent,
    CentroAmericaComponent,
    SurAmericaComponent,
    ListaDatosCovidComponent,
    AudioMapaComponent,
    AudioDatosCovidComponent,
    AnimacionMComponent,
    BatallaComponent,
    AfricaComponent,
    Tablero1Component,
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
