import {Component, OnInit} from '@angular/core';
import {EscuderiaService} from "../../services/http/escuderia.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-lista-escuderia',
  templateUrl: './ruta-lista-escuderia.component.html',
  styleUrls: ['./ruta-lista-escuderia.component.css']
})
export class RutaListaEscuderiaComponent implements OnInit {

  arregloEscuderias = [];

  constructor(
    private readonly _escuderiaService: EscuderiaService,
    private readonly _router: Router,
  ) {
  }

  ngOnInit(): void {
    this.filtrarArreglo();
  }

  irAEditarEscuderia(id: number) {
    const ruta = ['/escuderia', 'editar', id];
    this._router.navigate(ruta);
  }

  irAVerPilotos(id: number) {
    const ruta = ['/piloto', 'lista', id];
    this._router.navigate(ruta);
  }

  eliminarEscuderia(id: number) {
    const obsEliminar = this._escuderiaService.eliminar(id);
    obsEliminar
      .subscribe(
        () => {
          const indice = this.arregloEscuderias
            .findIndex(escuderia => escuderia.id === id)
          this.arregloEscuderias.splice(indice, 1);
        },
        error => {
          alert('Primero debe eliminar / reasignar los pilotos')
        }
      )
  }

  filtrarArreglo() {
    const observableTraerTodos = this._escuderiaService.traerTodos('')
    observableTraerTodos
      .subscribe(
        (escuderias: any[]) => {
          this.arregloEscuderias = escuderias
        },
        error => {
          console.log('Error', error)
        }
      )
  }

}
