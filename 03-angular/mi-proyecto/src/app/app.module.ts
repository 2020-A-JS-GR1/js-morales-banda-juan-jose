import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './componentes/carta-pelicula/carta-pelicula.component';
import {HttpClientModule} from "@angular/common/http";
import {UsuarioService} from "./services/http/usuario.service";
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaDetalleUsuarioComponent } from './rutas/ruta-detalle-usuario/ruta-detalle-usuario.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaListaUsuarioComponent } from './rutas/ruta-lista-usuario/ruta-lista-usuario.component';
import { RutaCrearUsuarioComponent } from './rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaEditarUsuarioComponent } from './rutas/ruta-editar-usuario/ruta-editar-usuario.component';
import { FormularioUsuarioComponent } from './componentes/formularios/formulario-usuario/formulario-usuario.component';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./services/auth/auth.service";
import {EstaLogeadoGuard} from "./services/guards/esta-logeado.guard";
import {EsAdministradorGuard} from "./services/guards/es-administrador.guard";
import {EsSupervisorGuard} from "./services/guards/es-supervisor.guard";
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [  // Componentes
    AppComponent,
    CartaPeliculaComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaDetalleUsuarioComponent,
    RutaUsuarioComponent,
    RutaListaUsuarioComponent,
    RutaCrearUsuarioComponent,
    RutaEditarUsuarioComponent,
    FormularioUsuarioComponent
  ],
  imports: [  // Modulo que vamos a utilizar
    BrowserModule,  // Modulo que importa el NGFOR y el NGIF
    AppRoutingModule,
    HttpClientModule,  // Importamos el modulo
    FormsModule, // Permite funcionalidad formularios Template
    BrowserAnimationsModule, // Angular Material
    MatButtonModule, // Angular Material
    NgbModule, // Bootstrap
    ButtonModule, // PrimeNG
  ],
  providers: [  // Servicios
    UsuarioService,
    AuthService,
    EstaLogeadoGuard,
    EsAdministradorGuard,
    EsSupervisorGuard,
  ],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule{

}
// @ts-ignore
