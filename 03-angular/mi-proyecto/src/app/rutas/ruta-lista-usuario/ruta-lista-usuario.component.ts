import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../services/http/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-lista-usuario',
  templateUrl: './ruta-lista-usuario.component.html',
  styleUrls: ['./ruta-lista-usuario.component.css']
})
export class RutaListaUsuarioComponent implements OnInit {

  arregloUsuarios = []

  constructor( // inyecta dependencias
    private readonly _usuarioService: UsuarioService,
    private readonly _router: Router
  ) {

  }

  irAEditarUsuario(id: number) {
    const ruta = ['/usuario', 'editar', id]
    // /usuario/editar/1
    this._router.navigate(ruta)
  }

  eliminarUsuario(id: number) {
    const obsEliminar = this._usuarioService
      .eliminar(id);
    obsEliminar
      .subscribe(
        () => {
          const indice = this.arregloUsuarios
            .findIndex(u => u.id === id);
          this.arregloUsuarios.splice(indice, 1);
        }
      )
  }

  ngOnInit(): void {
    const observableTraerTodos = this._usuarioService.traerTodos();
    observableTraerTodos
      .subscribe(
        (usuarios: any[]) => {
          this.arregloUsuarios = usuarios;
        },
        (error) => {
          console.log('Error', error)
        }
      )
  }
}
