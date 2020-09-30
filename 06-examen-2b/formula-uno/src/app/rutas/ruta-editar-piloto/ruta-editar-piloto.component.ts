import {Component, OnInit} from '@angular/core';
import {PilotoService} from "../../services/http/piloto.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-piloto',
  templateUrl: './ruta-editar-piloto.component.html',
  styleUrls: ['./ruta-editar-piloto.component.css']
})
export class RutaEditarPilotoComponent implements OnInit {

  piloto;

  mostrarFormulario = false;

  constructor(
    private readonly _pilotoService: PilotoService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
  ) {
  }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta
      .subscribe(
        (parametros) => {
          const idPiloto = Number(parametros.id);
          const obsPiloto = this._pilotoService.obtenerUnoPorId(idPiloto);
          obsPiloto
            .subscribe(
              (piloto: any) => {
                this.piloto = piloto;
                this.mostrarFormulario = true
              },
              (error) => {
                console.log('Error', error)
              }
            )
        }
      )
  }

  editarPiloto(piloto) {
    const obsEditarPiloto = this._pilotoService.editar(piloto, this.piloto.id);
    obsEditarPiloto
      .subscribe(
        (datos) => {
          const url = ['/piloto', 'lista'];
          this._router.navigate(url)
        },
        error => {
          console.log('Error:', error)
        }
      )
  }
}
