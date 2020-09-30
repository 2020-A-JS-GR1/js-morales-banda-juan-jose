import {Component, OnInit} from '@angular/core';
import {EscuderiaService} from "../../services/http/escuderia.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-escuderia',
  templateUrl: './ruta-editar-escuderia.component.html',
  styleUrls: ['./ruta-editar-escuderia.component.css']
})
export class RutaEditarEscuderiaComponent implements OnInit {

  escuderia;

  mostrarFormulario = false;

  constructor(
    private readonly _escuderiaService: EscuderiaService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
  ) {
  }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta
      .subscribe(
        (parametros) => {
          const id = Number(parametros.id)
          const obsEscuderia = this._escuderiaService.obtenerUnoPorId(id);
          obsEscuderia
            .subscribe(
              (escuderia: any) => {
                this.escuderia = escuderia;
                this.mostrarFormulario = true
              },
              (error) => {
                console.log('Error', error)
              }
            )
        }
      )
  }

  editarEscuderia(escuderia) {
    const obsEditarEscuderia = this._escuderiaService.editar(escuderia, this.escuderia.id);
    obsEditarEscuderia
      .subscribe(
        (datos) => {
          const url = ['/escuderia', 'lista'];
          this._router.navigate(url);
        },
        error => {
          console.log('Error:', error)
        }
      )
  }
}
