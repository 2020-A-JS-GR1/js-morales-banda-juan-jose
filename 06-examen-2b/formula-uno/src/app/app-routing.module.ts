import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaListaEscuderiaComponent} from "./rutas/ruta-lista-escuderia/ruta-lista-escuderia.component";
import {RutaCrearEscuderiaComponent} from "./rutas/ruta-crear-escuderia/ruta-crear-escuderia.component";
import {RutaEditarEscuderiaComponent} from "./rutas/ruta-editar-escuderia/ruta-editar-escuderia.component";
import {RutaListaPilotoComponent} from "./rutas/ruta-lista-piloto/ruta-lista-piloto.component";
import {RutaCrearPilotoComponent} from "./rutas/ruta-crear-piloto/ruta-crear-piloto.component";
import {RutaEditarPilotoComponent} from "./rutas/ruta-editar-piloto/ruta-editar-piloto.component";
import {RutaEscuderiaComponent} from "./rutas/ruta-escuderia/ruta-escuderia.component";
import {RutaPilotoComponent} from "./rutas/ruta-piloto/ruta-piloto.component";

const routes: Routes = [
  {
    component: RutaInicioComponent,
    path: 'inicio',
  },
  {
    component: RutaEscuderiaComponent,
    path: 'escuderia',
    children: [
      {
        component: RutaListaEscuderiaComponent,
        path: 'lista'
      },
      {
        component: RutaCrearEscuderiaComponent,
        path: 'crear'
      },
      {
        component: RutaEditarEscuderiaComponent,
        path: 'editar/:id'
      },
      {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
      },
    ]
  },
  {
    component: RutaPilotoComponent,
    path: 'piloto',
    children: [
      {
        component: RutaListaPilotoComponent,
        path: 'lista',
      },
      {
        component: RutaCrearPilotoComponent,
        path: 'crear'
      },
      {
        component: RutaEditarPilotoComponent,
        path: 'editar/:id'
      },
      {
        component: RutaListaPilotoComponent,
        path: 'lista/:id'
      },
      {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
