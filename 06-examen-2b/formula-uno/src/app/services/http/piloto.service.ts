import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PilotoService {
  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  traerTodos(consulta?:string) {
    return this._httpClient.get(this.url + '/Piloto?' + consulta)
  }

  crear(piloto) {
    return this._httpClient.post(
      this.url + '/Piloto',  // URL
      piloto  // Datos
    )
  }

  eliminar(idPiloto: number) {
    return this._httpClient.delete(this.url + '/Piloto/' + idPiloto)
  }

  obtenerUnoPorId(idPiloto: number) {
    return this._httpClient.get(this.url + '/Piloto/' + idPiloto)
  }

  editar(piloto, id) {
    return this._httpClient.put(
      this.url + '/Piloto/' + id,  // URL
      piloto  // Datos
    )
  }


}
