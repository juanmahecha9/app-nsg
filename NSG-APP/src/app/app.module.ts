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
import { Tablero2Component } from './componentes/tablero2/tablero2.component';
import { Tablero3Component } from './componentes/tablero3/tablero3.component';
import { Tablero4Component } from './componentes/tablero4/tablero4.component';
import { Tablero5Component } from './componentes/tablero5/tablero5.component';
import { Tablero6Component } from './componentes/tablero6/tablero6.component';
import { InstruccionesComponent } from './componentes/instrucciones/instrucciones.component';
import { Tablero7Component } from './componentes/tablero7/tablero7.component';
import { UserLoginComponent } from './compentes/user-login/user-login.component';
import { Tablero8Component } from './componentes/tablero8/tablero8.component';

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
    Tablero2Component,
    Tablero3Component,
    Tablero4Component,
    Tablero5Component,
    Tablero6Component,
    InstruccionesComponent,
    Tablero7Component,
    UserLoginComponent,
    Tablero8Component,
    
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
