import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {EscuderiaService} from "./services/http/escuderia.service";
import {PilotoService} from "./services/http/piloto.service";
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaCrearPilotoComponent } from './rutas/ruta-crear-piloto/ruta-crear-piloto.component';
import { RutaCrearEscuderiaComponent } from './rutas/ruta-crear-escuderia/ruta-crear-escuderia.component';
import { RutaEditarEscuderiaComponent } from './rutas/ruta-editar-escuderia/ruta-editar-escuderia.component';
import { RutaEditarPilotoComponent } from './rutas/ruta-editar-piloto/ruta-editar-piloto.component';
import { RutaListaPilotoComponent } from './rutas/ruta-lista-piloto/ruta-lista-piloto.component';
import { RutaListaEscuderiaComponent } from './rutas/ruta-lista-escuderia/ruta-lista-escuderia.component';
import { RutaEscuderiaComponent } from './rutas/ruta-escuderia/ruta-escuderia.component';
import { RutaPilotoComponent } from './rutas/ruta-piloto/ruta-piloto.component';
import { FormularioPilotoComponent } from './componentes/formularios/formulario-piloto/formulario-piloto.component';
import { FormularioEscuderiaComponent } from './componentes/formularios/formulario-escuderia/formulario-escuderia.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutaCrearPilotoComponent,
    RutaCrearEscuderiaComponent,
    RutaEditarEscuderiaComponent,
    RutaEditarPilotoComponent,
    RutaListaPilotoComponent,
    RutaListaEscuderiaComponent,
    RutaEscuderiaComponent,
    RutaPilotoComponent,
    FormularioPilotoComponent,
    FormularioEscuderiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [
    EscuderiaService,
    PilotoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
