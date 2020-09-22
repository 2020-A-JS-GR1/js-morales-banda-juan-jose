import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  @Input()
  nombreInput: string;

  @Input()
  cedulaInput: string;

  @Input()
  estadoCivilInput: string;

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>()

  nombreModelo: String;
  cedulaModelo: String;
  estadoCivilModelo: String;

  constructor() {
  }

  ngOnInit(): void {
    if (this.nombreInput && this.cedulaInput && this.estadoCivilInput) {
      this.nombreModelo = this.nombreInput;
      this.cedulaModelo = this.cedulaInput;
      this.estadoCivilModelo = this.estadoCivilInput;
    }
  }

  crearUsuario(formulario) {
    //console.log(formulario)
    const cedula = this.cedulaModelo;
    const esNumero = !isNaN(Number(cedula))
    if (esNumero) {
      // LLAMAR AL SERVICIO HTTP Y ENVIAR POST AL SERVIDOR
      // CON DATOS DEL FORMULARIO
      console.log('LISTO')
      this.informacionValidada.emit({
        nombre: this.nombreModelo,
        cedula: this.cedulaModelo,
        estadoCivil: this.estadoCivilModelo,
      })
    } else {
      console.error('NO ES UN NUMERO')
    }
  }

  ayuda() {
    alert('Ayuda')
  }

}
