import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  nombreModelo: String;
  cedulaModelo: String;
  estadoCivilModelo: String;

  constructor() { }

  ngOnInit(): void {
  }

  crearUsuario(formulario){
    //console.log(formulario)
    const cedula = this.cedulaModelo;
    const esNumero = !isNaN(Number(cedula))
    if(esNumero){
      // LLAMAR AL SERVICIO HTTP Y ENVIAR POST AL SERVIDOR
      // CON DATOS DEL FORMULARIO
      console.log('LISTO')
    }else{
      console.error('NO ES UN NUMERO')
    }
  }

  ayuda(){
    alert('Ayuda')
  }

}
