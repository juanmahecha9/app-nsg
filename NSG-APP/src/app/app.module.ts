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
import { AfricaComponent } from './componentes/africa/africa.component';
import { BotonesMapaComponent } from './componentes/botones-mapa/botones-mapa.component';
import { AsiaComponent } from './componentes/asia/asia.component';
import { EuropaComponent } from './componentes/europa/europa.component';
import { CentroAmericaComponent } from './componentes/centro-america/centro-america.component';
import { SurAmericaComponent } from './componentes/sur-america/sur-america.component'; 
import { ListaDatosCovidComponent } from './componentes/lista-datos-covid/lista-datos-covid.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { from } from 'rxjs';
/* importar servicos */
import { AuthGuard } from './auth.guard';
import { TokenService } from './services/token.service';

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
    AfricaComponent,
    BotonesMapaComponent,
    AsiaComponent,
    EuropaComponent,
    CentroAmericaComponent,
    SurAmericaComponent,
    ListaDatosCovidComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
