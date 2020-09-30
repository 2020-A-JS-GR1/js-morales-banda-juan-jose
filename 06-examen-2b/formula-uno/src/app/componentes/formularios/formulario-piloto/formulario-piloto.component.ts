import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EscuderiaService} from "../../../services/http/escuderia.service";

@Component({
  selector: 'app-formulario-piloto',
  templateUrl: './formulario-piloto.component.html',
  styleUrls: ['./formulario-piloto.component.css']
})
export class FormularioPilotoComponent implements OnInit {

  @Input()
  nombreInput: string;

  @Input()
  apellidoInput: string;

  @Input()
  paisInput: string;

  @Input()
  polePositionsInput: number;

  @Input()
  victoriasInput: number;

  @Input()
  campeonatosInput: number;

  @Input()
  retiradoInput: boolean;

  @Input()
  escuderiaInput: number;

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>()

  nombreModelo: string;
  apellidoModelo: string;
  paisModelo: string;
  polePositionsModelo: number;
  victoriasModelo: number;
  campeonatosModelo: number;
  retiradoModelo: boolean;
  escuderiaModelo: number;

  arregloEscuderias = [];
  existeEscuderia = true;

  constructor(
    private readonly _escuderiaService: EscuderiaService,
  ) {
  }

  ngOnInit(): void {
    if (this.nombreInput && this.apellidoInput && this.paisInput
      && (this.polePositionsInput >= 0) && (this.victoriasInput >= 0)
      && (this.campeonatosInput >= 0)) {
      this.nombreModelo = this.nombreInput;
      this.apellidoModelo = this.apellidoInput;
      this.paisModelo = this.paisInput;
      this.polePositionsModelo = this.polePositionsInput;
      this.victoriasModelo = this.victoriasInput;
      this.campeonatosModelo = this.campeonatosInput;
      this.retiradoModelo = this.retiradoInput;
    }
    if (this.escuderiaInput !== null) {
      this.escuderiaModelo = this.escuderiaInput;
    }
    this.obtenerEscuderias()
  }

  crearPiloto(formulario) {
    // console.log('form: ', formulario)
    this.informacionValidada.emit({
      nombre: this.nombreModelo,
      apellido: this.apellidoModelo,
      pais: this.paisModelo,
      pole_positions: this.polePositionsModelo,
      cantidad_victorias: this.victoriasModelo,
      cantidad_campeonatos: this.campeonatosModelo,
      retirado: this.retiradoModelo,
      escuderia: this.escuderiaModelo,
    })
  }

  obtenerEscuderias() {
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
