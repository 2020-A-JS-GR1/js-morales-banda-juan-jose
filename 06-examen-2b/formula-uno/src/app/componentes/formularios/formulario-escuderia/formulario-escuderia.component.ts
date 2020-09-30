import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-escuderia',
  templateUrl: './formulario-escuderia.component.html',
  styleUrls: ['./formulario-escuderia.component.css']
})
export class FormularioEscuderiaComponent implements OnInit {

  @Input()
  nombreInput: string;

  @Input()
  anioInput: number;

  @Input()
  paisInput: string;

  @Input()
  activaInput: boolean;

  @Input()
  directorInput: string;

  @Input()
  motorInput: string;

  @Input()
  campeonatosInput: number;

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>();

  nombreModelo: string;
  anioModelo: number;
  paisModelo: string;
  activaModelo: boolean;
  directorModelo: string;
  motorModelo: string;
  campeonatosModelo: number;

  constructor() {
  }

  ngOnInit(): void {
    if (this.nombreInput && this.anioInput && this.paisInput
      && this.directorInput && this.motorInput && this.campeonatosInput) {
      this.nombreModelo = this.nombreInput;
      this.anioModelo = this.anioInput;
      this.paisModelo = this.paisInput;
      this.activaModelo = this.activaInput;
      this.directorModelo = this.directorInput;
      this.motorModelo = this.motorInput;
      this.campeonatosModelo = this.campeonatosInput;
    }
  }

  crearEscuderia(formulario) {
    // console.log('form:', formulario);
    this.informacionValidada.emit({
      nombre: this.nombreModelo,
      anio_creacion: this.anioModelo,
      pais: this.paisModelo,
      activa: this.activaModelo,
      director: this.directorModelo,
      motor: this.motorModelo,
      cantidad_campeonatos: this.campeonatosModelo,
    })
  }
}
