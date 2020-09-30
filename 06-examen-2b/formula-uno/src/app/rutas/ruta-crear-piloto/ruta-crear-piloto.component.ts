import {Component, OnInit} from '@angular/core';
import {PilotoService} from "../../services/http/piloto.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-piloto',
  templateUrl: './ruta-crear-piloto.component.html',
  styleUrls: ['./ruta-crear-piloto.component.css']
})
export class RutaCrearPilotoComponent implements OnInit {

  constructor(
    private readonly _pilotoService: PilotoService,
    private readonly _router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  crearPiloto(piloto) {
    // console.log('piloto:', piloto)
    const observableCrear = this._pilotoService.crear(piloto)
    observableCrear
      .subscribe(
        (datos) => {
          const url = ['/piloto', 'lista']
          this._router.navigate(url);
        },
        (error) => {
          console.error('Error', error)
        }
      )
  }
}
