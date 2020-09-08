import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {ConsoleLogger} from "@angular/compiler-cli/ngcc";

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit, OnDestroy {

  @Input()
  urlimagen: string;

  @Input()
  descripcion: string;

  @Input()
  nombreBoton: string;

  @Output()
  eventoDioClicEnBoton: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  eventoDioClicEnImagegn: EventEmitter<boolean> = new EventEmitter<boolean>()

  textoEjemplo = 'Juan Jose';
  urlEjemploImagen = 'https://images-na.ssl-images-amazon.com/images/I/51ye3LkFQ5L._AC_.jpg';
  linkTextoEjemplo = 'https://www.google.com/';

  ejemploFuncion() {
    alert('HOLA!')
  }

  eventoOnBlur() {
    console.log('Blur')
  }

  ejecutarEventoDioClic() {
    this.eventoDioClicEnBoton.emit(true)
  }

  ejecutarEventoDioClicImagen() {
    this.eventoDioClicEnImagegn.emit(true)
  }


  constructor() {
    console.log('CONSTRUCTOR')
  }

  ngOnInit(): void {
    console.log('INIT')
    // Logica Inicial de Componente
  }

  ngOnDestroy(): void {
    console.log('DESTROY')
    // Desuscribimos de todas las suscripciones
  }

}
