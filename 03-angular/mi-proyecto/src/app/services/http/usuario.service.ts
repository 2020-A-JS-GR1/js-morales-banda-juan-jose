import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UsuarioService {
  url = 'http://localhost:1337'

  //url = 'http://localhost:49999'
  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  traerTodos(consulta?:string) {
    return this._httpClient.get(this.url + '/Usuario?' + consulta)
  }

  crear(usuario) {
    return this._httpClient.post(
      this.url + '/Usuario',  // URL
      usuario  // Datos
    )
  }

  eliminar(idUsuario: number) {
    return this._httpClient.delete(this.url + '/Usuario/' + idUsuario)
  }

  obtenerUnoPorId(idUsuario: number) {
    return this._httpClient.get(this.url + '/Usuario/' + idUsuario)
  }

  editar(usuario, id) {
    return this._httpClient.put(
      this.url + '/Usuario/' + id,  // URL
      usuario  // Datos
    )
  }


}
