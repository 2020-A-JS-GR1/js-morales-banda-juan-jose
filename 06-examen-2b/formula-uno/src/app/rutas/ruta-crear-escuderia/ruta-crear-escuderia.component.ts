import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EscuderiaService} from "../../services/http/escuderia.service";

@Component({
  selector: 'app-ruta-crear-escuderia',
  templateUrl: './ruta-crear-escuderia.component.html',
  styleUrls: ['./ruta-crear-escuderia.component.css']
})
export class RutaCrearEscuderiaComponent implements OnInit {

  constructor(
    private readonly _escuderiaService: EscuderiaService,
    private readonly _router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  crearEscuderia(escuderia) {
    // console.log('escuderia', escuderia)
    const observableCrear = this._escuderiaService.crear(escuderia)
    observableCrear
      .subscribe(
        (datos) => {
          const url = ['escuderia', 'lista']
          this._router.navigate(url)
        },
        (error) => {
          console.log('Error:', error)
        }
      )
  }
}
