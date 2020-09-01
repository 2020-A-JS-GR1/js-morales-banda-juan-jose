import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit {

  @Input()
  urlimagen: string;

  @Input()
  descripcion: string;

  @Input()
  nombreBoton: string;

  textoEjemplo = 'Juan Jose';
  urlEjemploImagen = 'https://images-na.ssl-images-amazon.com/images/I/51ye3LkFQ5L._AC_.jpg';
  linkTextoEjemplo = 'https://www.google.com/';

  ejemploFuncion(){
    alert('HOLA!')
  }

  eventoOnBlur(){
    console.log('Blur')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
