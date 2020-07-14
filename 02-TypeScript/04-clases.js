class Persona {
    constructor(parametroNombre, parametroApellido) {
        this.nombreYApellido = '';
        this.nombre = parametroNombre;
        this.apellido = parametroApellido;
        this.nombreYApellido = this.nombre + ' ' + this.apellido;
    }
    ;
    mostrarNombreApellido() {
        return this.nombreYApellido;
    }
}
Persona.nombreReferencial = 'Humano';
class Usuario extends Persona {
    constructor(nombreParametro, apellidoParametro, cedula, estadoCivil) {
        super(nombreParametro, apellidoParametro);
        this.cedula = cedula;
        this.estadoCivil = estadoCivil;
    }
}
const juan = new Usuario('Juan', 'Morales', '1723765390', 'soltero');
console.log(juan.nombre);
console.log(juan.apellido);
console.log(juan.cedula);
console.log(juan.estadoCivil);
