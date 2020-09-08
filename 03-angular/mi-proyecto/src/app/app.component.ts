import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "./services/http/usuario.service";

@Component({
  selector: 'aplicacion-nueva',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mi-proyecto';

  habilitado = true;

  arregloPeliculas = [
    {
      id: 1,
      url: 'https://images-na.ssl-images-amazon.com/images/I/51ye3LkFQ5L._AC_.jpg',
      descripcion: 'Adolescentes quieren ver fuegos artificiales',
      nombrePelicula: 'Uchiague Hanabi'
    },
    {
      id: 2,
      url: 'https://i.ebayimg.com/images/g/4fIAAOSwKEFbu-Bt/s-l300.jpg',
      descripcion: 'La vida de un pianista y su amiga violinista con leucemia',
      nombrePelicula: 'Shigatsu Wa Kimi no Uso'
    },
    {
      id: 3,
      url: 'https://m.media-amazon.com/images/M/MV5BOTg5ZjI5ZTAtOWE2OS00MjY4LWI4ZDQtMzEzMDY4MTgzYWJlXkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_UY1200_CR106,0,630,1200_AL_.jpg',
      descripcion: 'Ruta de Tohsaka Rin en Fate/Stay Night',
      nombrePelicula: 'Fate/Stay Night: Unlimited Blade Works'
    }
  ];

  arregloNumeros = [1, 2, 3];

  arregloUsuarios = [];

  arregloObservables = [];

  //INYECTAR DEPENDENCIAS
  constructor(
    private readonly _usuarioService: UsuarioService
  ) {
  }

  mensajeConsola(objeto: boolean) {
    console.log('Llegó el evento', objeto);
    const observableTraerTodos = this._usuarioService.traerTodos()
    //los observables son como las promesas
    const subscripcion = observableTraerTodos
      .subscribe(
        (data) => { // THEN TRY
          this.arregloUsuarios = data as any []
          console.log(data);
        },
        (error) => { // CATCH
          console.log(error);
        }
      );
    this.arregloObservables.push(subscripcion)
  }

  crearUsuario() {
    const usuarioNuevo = {
      cedula: "7777777777",
      nombre: "Inori",
      apellido: "Yuzuriha"
    };
    const obsCrearUsuario = this._usuarioService.crear(usuarioNuevo)
    const subscripcion = obsCrearUsuario
      .subscribe(
        (datos) => {
          console.log('Nuevo Usuario', datos)
          this.mensajeConsola(true)
        },
        (error) => {
          console.log(error)
        }
      )
    this.arregloObservables.push(subscripcion)
  }

  ngOnInit() {
    this.mensajeConsola(true)
  }
}
