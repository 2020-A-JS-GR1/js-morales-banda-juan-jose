import {Component, OnInit} from '@angular/core';
import {PilotoService} from "../../services/http/piloto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EscuderiaService} from "../../services/http/escuderia.service";

@Component({
  selector: 'app-ruta-lista-piloto',
  templateUrl: './ruta-lista-piloto.component.html',
  styleUrls: ['./ruta-lista-piloto.component.css']
})
export class RutaListaPilotoComponent implements OnInit {

  arregloPilotos = [];
  nombreEscuderia;

  constructor(
    private readonly _pilotoService: PilotoService,
    private readonly _escuderiaService: EscuderiaService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
  ) {
  }

  ngOnInit(): void {
    this.pilotosPorEscuderia()
  }

  irAEditarPiloto(id: number) {
    const ruta = ['/piloto', 'editar', id];
    this._router.navigate(ruta);
  }

  eliminarPiloto(id: number) {
    const obsEliminar = this._pilotoService.eliminar(id);
    obsEliminar
      .subscribe(
        () => {
          const indice = this.arregloPilotos
            .findIndex(piloto => piloto.id === id)
          this.arregloPilotos.splice(indice, 1);
        }
      )
  }

  filtrarArreglo() {
    const observableTraerTodos = this._pilotoService.traerTodos('')
    observableTraerTodos
      .subscribe(
        (pilotos: any[]) => {
          this.arregloPilotos = pilotos
        },
        error => {
          console.log('Error', error)
        }
      )
  }

  pilotosPorEscuderia() {
    const obsRuta = this._activatedRoute.params;
    obsRuta
      .subscribe(
        (parametros) => {
          const longitud = Object.keys(parametros).length
          if (longitud > 0) {
            const idEscuderia = Number(parametros.id)

            const obsEscuderia = this._escuderiaService.obtenerUnoPorId(idEscuderia)
            obsEscuderia
              .subscribe(
                (escuderia: any) => {
                  this.nombreEscuderia = escuderia.nombre
                },
                error => {
                  console.log('Error:', error)
                }
              )

            const consulta = {
              escuderia: idEscuderia
            }
            const consultaString = 'where=' + JSON.stringify(consulta)

            const obsPiloto = this._pilotoService.traerTodos(consultaString);
            obsPiloto
              .subscribe(
                (pilotos: any[]) => {
                  this.arregloPilotos = pilotos;
                },
                (error) => {
                  console.log('Error', error)
                }
              )
          } else {
            this.filtrarArreglo()
            this.nombreEscuderia = null
          }
        }
      )
  }
}
