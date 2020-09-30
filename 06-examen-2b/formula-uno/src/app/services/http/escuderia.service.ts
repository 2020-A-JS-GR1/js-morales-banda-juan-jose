import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EscuderiaService {
  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  traerTodos(consulta?: string) {
    return this._httpClient.get(this.url + '/Escuderia?' + consulta)
  }

  crear(escuderia) {
    return this._httpClient.post(
      this.url + '/Escuderia',  // URL
      escuderia  // Datos
    )
  }

  eliminar(idEscuderia: number) {
    return this._httpClient.delete(this.url + '/Escuderia/' + idEscuderia)
  }

  obtenerUnoPorId(idEscuderia: number) {
    return this._httpClient.get(this.url + '/Escuderia/' + idEscuderia)
  }

  editar(escuderia, id) {
    return this._httpClient.put(
      this.url + '/Escuderia/' + id,  // URL
      escuderia  // Datos
    )
  }
}
